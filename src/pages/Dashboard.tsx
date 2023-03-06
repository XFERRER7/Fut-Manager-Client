import { useEffect, useState } from 'react'
import { Navbar } from '../components/Navbar'
import { PlayerModal } from '../components/PlayerModal'
import { useApi } from '../service/api'
import useUserStore from '../stores/AuthStore'
import { IPlayer } from '../types/types'

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

export interface ITeam {
  id: string
  position: string
  age: number
  name: string
  birthDate: string
  weight: number
  height: number
  nationality: string
  salary: number
  avatar: string
  isInjured: boolean
  createdAt: string
  updatedAt: string
  teamId: string
}

export const Dashboard = () => {

  const [dataUser, setDataUser] = useState<IDataUser | null>(null)
  const [dataTeam, setDataTeam] = useState<ITeam[] | null>(null)
  const [dataPlayer, setDataPlayer] = useState<IPlayer | null>(null)
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const api = useApi()
  const { idUser } = useUserStore()
  const { token } = useUserStore()

  const getDataUser = async () => {

    const res = await api.getDataUser(idUser, token)

    return res
  }

  const getDataTeam = async () => {

    const res = await api.getPlayerByTeamId(dataUser?.teams?.id)

    return res

  }

  const handleClickPlayer = (playerId: string) => {

    setModalIsOpen(!modalIsOpen)

    if (modalIsOpen) return

    api.getPlayerById(playerId)
      .then(res => {
        setDataPlayer(res)
      })
      .catch(err => {
        console.log(err)
      })
  }

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

    getDataTeam()
      .then(res => {

        if (res.length === 0) return setDataTeam(null)
        setDataTeam(res)
      })
      .catch(err => {
        console.log(err)
      }
      )

  }, [dataUser])

  return (
    <div className='flex flex-col items-center gap-5'>
      
      <Navbar title='Dashboard'/>

      <h1>{dataUser?.teams.name}</h1>
      <img src={`http://localhost:3000/teamFiles/${dataUser?.teams.logo}`} alt="" />

      <div className='flex flex-col items-center h-96 w-3/4 gap-1'>
        {
          dataTeam !== null ? dataTeam.map((item: ITeam) =>
            <div
              key={item.id}
              className='w-3/4 bg-green-100 h-20 text-white flex items-center justify-around'
              onClick={() => {
                handleClickPlayer(item.id)
              }}
            >
              <img src={`http://localhost:3000/playerFiles/${item.avatar}`} className='w-16 h-16' alt="" />
              <span>{item.name}</span>
              <span>{item.nationality}</span>
              <span>{item.position}</span>
            </div>
          )

            : <span>Sem jogadores registrados</span>
        }
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
      />
        : null
      }
    </div>
  )
}
