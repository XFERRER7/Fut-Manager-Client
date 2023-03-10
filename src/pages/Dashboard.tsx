import { Sidebar } from '../components/Sidebar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell as solidBell } from '@fortawesome/free-solid-svg-icons'
import { faBell as regularBell } from '@fortawesome/free-regular-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'
import useUserStore from '../stores/AuthStore'
import { useApi } from '../service/api'
import { IPlayer } from '../types/types'
import { Card } from '../components/Card'
import { faFutbol } from '@fortawesome/free-solid-svg-icons'
import { faBullseye } from '@fortawesome/free-solid-svg-icons'
import { faPersonRunning } from '@fortawesome/free-solid-svg-icons'
import { faUserShield } from '@fortawesome/free-solid-svg-icons'
import { CardPlayer } from '../components/CardPlayer'
import { PlayerModal } from '../components/PlayerModal'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReactLoading from 'react-loading';
import { faPersonCirclePlus } from '@fortawesome/free-solid-svg-icons'
import { SearchBar } from '../components/SearchBar'

interface IDataUser {
  id: number
  name: string
  email: string
  password: string
  teams: {
    id: string
    name: string
    logo: string
  }
}

export const Dashboard = () => {


  //States
  const [dataUser, setDataUser] = useState<IDataUser | null>(null)
  const [players, setPlayers] = useState<IPlayer[] | null>(null)
  const [dataPlayer, setDataPlayer] = useState<IPlayer | null>(null)
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [hasNotification, setHasNotification] = useState(false)
  const [status, setStatus] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [filter, setFilter] = useState('')
  const [statistics, setStatistics] = useState({
    total: {
      percentage: 0,
      amount: 0
    },
    forwards: {
      percentage: 0,
      amount: 0
    },
    midfielders: {
      percentage: 0,
      amount: 0
    },
    defenders: {
      percentage: 0,
      amount: 0
    },
  })


  //Variables and constants
  const { idUser } = useUserStore()
  const { token } = useUserStore()
  const api = useApi()


  //Functions
  const getDataUser = async () => {

    const res = await api.getDataUser(idUser, token)

    return res
  }

  const getPlayers = async () => {

    const res = await api.getPlayerByTeamId(dataUser?.teams?.id)

    if (res.length === 0) return setPlayers(null)

    setPlayers(res)

  }

  const handleClickPlayer = async (playerId: string) => {

    if (!modalIsOpen) setIsLoading(true)

    await api.getPlayerById(playerId)
      .then((res) => {
        setDataPlayer(res);
      })
      .catch((err) => {
        console.log(err);
      })

    setModalIsOpen(true)
  };


  //Side effects
  useEffect(() => {

    getDataUser()
      .then(res => {
        setDataUser(res)
      })
      .catch(err => {
        console.log(err)
      })


  }, [])

  useEffect(() => {

    getPlayers()


  }, [dataUser])


  useEffect(() => {

  }, [])

  useEffect(() => {

    const qtd = players?.length

    const forwards = players?.filter(player =>
      player.position === 'Ponta esquerda' ||
      player.position == 'Atacante' ||
      player.position == 'Ponta direita'
    ).length

    const midfielders = players?.filter(player =>
      player.position === 'Meio campo' ||
      player.position == 'Meia atacante' ||
      player.position == 'Volante'
    ).length

    const defenders = players?.filter(player =>
      player.position === 'Zagueiro' ||
      player.position == 'Lateral esquerdo' ||
      player.position == 'Lateral direito' ||
      player.position == 'Goleiro'
    ).length


    setStatistics({
      total: {
        percentage: 100,
        amount: qtd ? qtd : 0
      },
      forwards: {
        percentage: forwards ? (forwards / qtd!) * 100 : 0,
        amount: forwards ? forwards : 0
      },
      midfielders: {
        percentage: midfielders ? (midfielders / qtd!) * 100 : 0,
        amount: midfielders ? midfielders : 0
      },
      defenders: {
        percentage: defenders ? (defenders / qtd!) * 100 : 0,
        amount: defenders ? defenders : 0
      }
    })

  }, [players])

  useEffect(() => {

    if (status === 'success') {
      toast.success('Jogador atualizado com sucesso!', {
        closeOnClick: true,
        pauseOnHover: true,
      });
      setStatus('')
    }
    else if (status === 'error') {
      toast.error('Erro ao atualizar jogador!', {
        closeOnClick: true,
        pauseOnHover: true,
      });
      setStatus('')
    }

  }, [status])

  return (
    <div className='bg-green-100 w-full h-screen p-5 font-sans'>
      <div className='bg-green-100 w-full h-full flex rounded-lg justify-between gap-2'>

        <Sidebar itemSelected='Meu Time' />
        <main className='bg-[#EAF8F1] rounded-lg flex-1 h-full flex flex-col px-1 relative'>

          <header className='w-full h-24 border-b flex items-center justify-between px-5 text-gray-700'>
            <div className='flex gap-3 items-center'>
              <img src={`http://localhost:3000/teamFiles/${dataUser?.teams.logo}`}
                className='relative object-cover object-center w-12 h-12 rounded-full' alt="shield team" />
              <h1 className='text-2xl font-bold'>{dataUser?.teams.name}</h1>
            </div>

            <div className='flex items-center gap-5'>
              <SearchBar />
              {
                hasNotification ?
                  <FontAwesomeIcon icon={solidBell} className='text-2xl text-green-900' />
                  :
                  <FontAwesomeIcon icon={regularBell} className='text-2xl text-green-900' />
              }
              <div className='flex flex-col items-center w-10 h-10 bg-green-900 rounded-full justify-center text-sm'>
                <span className='text-white font-bold text-lg uppercase'>{dataUser?.name[0]}</span>
              </div>
            </div>
          </header>


          <section className='w-full flex-1 rounded-lg px-5 flex flex-col overflow-x-scroll'>

            <div className='w-full h-48 flex flex-col gap-3'>
              <h1 className='font-bold text-lg text-gray-700 mt-5'>Dados gerais</h1>

              <div className='w-full flex items-center justify-between'>

                <Card color='#377140' icon={faFutbol}
                  percentage={statistics.total.percentage.toString()} statistic={statistics.total.amount} title={'Total'} />

                <Card color='#C92114' icon={faBullseye}
                  percentage={statistics.forwards.percentage.toFixed(2)} statistic={statistics.forwards.amount} title={'Atacantes'} />

                <Card color='#228B22' icon={faPersonRunning}
                  percentage={statistics.midfielders.percentage.toFixed(2)} statistic={statistics.midfielders.amount} title={'Meias'} />

                <Card color='#1B2C6D' icon={faUserShield}
                  percentage={statistics.defenders.percentage.toFixed(2)} statistic={statistics.defenders.amount} title={'Defensores'} />

              </div>

            </div>

            <div className='w-full flex-1 flex flex-col'>
              <div className='mt-5 flex items-center justify-between'>
                <h1 className='font-bold text-lg text-gray-700 mt-5'>Jogadores</h1>

                <div className='flex gap-5 mt-5 items-center'>
                  <button className='bg-green-700 text-white h-9 py-1 px-2 rounded'>
                    <FontAwesomeIcon icon={faPersonCirclePlus} />
                    <span className="ml-2 font-semibold">Adicionar jogador</span>
                  </button>
                  <select
                    name="pos"
                    className='px-3 w-36 h-10 border-2 border-gray-400 rounded-md'
                    onChange={(e) => {
                      setFilter(e.target.value)
                    }}
                  >
                    <option value="" selected disabled>Filtrar</option>
                    <option value="all">Todos</option>
                    <option value="defender">Defensor</option>
                    <option value="midfield">Meio campo</option>
                    <option value="forward">Atacante</option>
                  </select>
                </div>

              </div>
              <div className='flex-1 flex flex-col items-center gap-3 mt-3'>

                {
                  filter === '' || filter == 'all' ? players !== null ? players.map((item: IPlayer) =>
                    <CardPlayer
                      key={item.id}
                      age={item.age}
                      avatar={item.avatar}
                      birthDate={item.birthDate}
                      height={item.height}
                      id={item.id}
                      isInjured={item.isInjured}
                      name={item.name}
                      nationality={item.nationality}
                      position={item.position}
                      salary={item.salary}
                      weight={item.weight}
                      onClick={() => handleClickPlayer(item.id)}

                    />
                  )
                    :
                    <span className='text-gray-600 font-bold mt-8'> Sem jogadores registrados</span>
                    :
                    filter === 'defender' ? players !== null ? players.filter((item: IPlayer) => item.position === 'Goleiro' || item.position == 'Zagueiro' || item.position == 'Lateral direito' || item.position == 'Lateral esquerdo').map((item: IPlayer) =>
                      <CardPlayer
                        key={item.id}
                        age={item.age}
                        avatar={item.avatar}
                        birthDate={item.birthDate}
                        height={item.height}
                        id={item.id}
                        isInjured={item.isInjured}
                        name={item.name}
                        nationality={item.nationality}
                        position={item.position}
                        salary={item.salary}
                        weight={item.weight}
                        onClick={() => handleClickPlayer(item.id)}

                      />
                    )
                      :
                      <span className='text-gray-600 font-bold mt-8'> Sem jogadores registrados</span>
                      :
                      filter === 'midfield' ? players !== null ? players.filter((item: IPlayer) => item.position === 'Meio campo' || item.position === 'Meia atacante' || item.position === 'Volante').map((item: IPlayer) =>
                        <CardPlayer
                          key={item.id}
                          age={item.age}
                          avatar={item.avatar}
                          birthDate={item.birthDate}
                          height={item.height}
                          id={item.id}
                          isInjured={item.isInjured}
                          name={item.name}
                          nationality={item.nationality}
                          position={item.position}
                          salary={item.salary}
                          weight={item.weight}
                          onClick={() => handleClickPlayer(item.id)}

                        />
                      )
                        :
                        <span className='text-gray-600 font-bold mt-8'> Sem jogadores registrados</span>
                        :
                        filter === 'forward' ? players !== null ? players.filter((item: IPlayer) => item.position === 'Atacante' || item.position === 'Ponta direita' || item.position === 'Ponta esquerda').map((item: IPlayer) =>
                          <CardPlayer
                            key={item.id}
                            age={item.age}
                            avatar={item.avatar}
                            birthDate={item.birthDate}
                            height={item.height}
                            id={item.id}
                            isInjured={item.isInjured}
                            name={item.name}
                            nationality={item.nationality}
                            position={item.position}
                            salary={item.salary}
                            weight={item.weight}
                            onClick={() => handleClickPlayer(item.id)}

                          />
                        )
                          :
                          <span className='text-gray-600 font-bold mt-8'> Sem jogadores registrados</span>
                          :
                          null
                }

              </div>
            </div>

          </section>
          {
            isLoading ?
              <div className='absolute top-0 left-0 
              right-0 bottom-0 z-10 flex items-center justify-center bg-[#0000007a]'>
                <ReactLoading type={'spin'} color={'#ffffff'} height={100} width={100} />
              </div>
              :
              null
          }
        </main>

      </div>

      {
        modalIsOpen && dataPlayer !== null ?
          <PlayerModal
            age={dataPlayer?.age}
            name={dataPlayer?.name}
            birthDate={dataPlayer?.birthDate}
            weight={dataPlayer?.weight}
            height={dataPlayer?.height}
            avatar={dataPlayer?.avatar}
            isInjured={dataPlayer?.isInjured}
            id={dataPlayer?.id}
            nationality={dataPlayer.nationality}
            position={dataPlayer?.position}
            salary={dataPlayer?.salary}
            setModalIsOpen={setModalIsOpen}
            getPlayers={getPlayers}
            setStatus={setStatus}
            setIsLoading={setIsLoading}
          />
          : null
      }

      <ToastContainer />
    </div >
  )
}
