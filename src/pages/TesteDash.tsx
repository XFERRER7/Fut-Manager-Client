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
import { faPersonRunning  } from '@fortawesome/free-solid-svg-icons'
import { faUserShield  } from '@fortawesome/free-solid-svg-icons'


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

export const TesteDash = () => {

  const [dataUser, setDataUser] = useState<IDataUser | null>(null)
  const [dataTeam, setDataTeam] = useState<ITeam[] | null>(null)
  const [dataPlayer, setDataPlayer] = useState<IPlayer | null>(null)
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [hasNotification, setHasNotification] = useState(false)

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
    <div className='bg-green-100 w-full h-screen p-5 font-sans'>
      <div className='bg-green-100 w-full h-full flex rounded-lg justify-between gap-2'>

        <Sidebar itemSelected='Meu Time' />
        <main className='bg-[#EAF8F1] rounded-lg flex-1 h-full flex flex-col'>

          <header className='w-full h-24 border-b flex items-center justify-between px-5 text-gray-700'>
            <div className='flex gap-3 items-center'>
              <img src={`http://localhost:3000/teamFiles/${dataUser?.teams.logo}`}
                className='relative object-cover object-center w-12 h-12 rounded-full' alt="shield team" />
              <h1 className='text-2xl font-bold'>{dataUser?.teams.name}</h1>
            </div>

            <div className='flex items-center gap-5'>
              <div className="relative text-gray-600 focus-within:text-gray-800">
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                  <FontAwesomeIcon icon={faSearch} className="h-4 w-4" />
                </span>
                <input
                  className="py-2 w-full rounded-md pl-10 border border-gray-300 focus:outline-none focus:border-gray-500"
                  type="search"
                  placeholder="Pesquise..."
                  aria-label="Search"
                />
              </div>
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


          <section className='w-full flex-1 rounded-lg flex flex-col'>

            <div className='w-full h-48 flex flex-col px-5 gap-3'>
              <h1 className='font-bold text-lg text-gray-700 mt-5'>Dados gerais</h1>

              <div className='w-full flex items-center justify-between'>

                <Card color='#377140' icon={faFutbol} percentage={'100'} statistic={'44'} title={'Total'}/>
                <Card color='#C92114' icon={faBullseye} percentage={'45,45'} statistic={'20'} title={'Atacantes'}/>
                <Card color='#228B22' icon={faPersonRunning} percentage={'36,36'} statistic={'16'} title={'Meias'}/>
                <Card color='#1B2C6D' icon={faUserShield} percentage={'18,18'} statistic={'8'} title={'Defensores'}/>
              </div>

            </div>

            <div className='w-full flex-1'>

            </div>

          </section>

        </main>

      </div>
    </div>
  )
}
