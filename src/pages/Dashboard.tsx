import React, { useEffect, useState } from 'react'
import { useApi } from '../service/api'
import useUserStore from '../stores/AuthStore'

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


  const api = useApi()
  const { idUser } = useUserStore()

  const getDataUser = async () => {

    const res = await api.getDataUser(idUser)

    return res
  }

  const getDataTeam = async () => {

    const res = await api.getPlayerByTeamId(dataUser?.teams?.id)

    console.log(dataUser?.teams?.id)

    return res

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
        setDataTeam(res)
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      }
      )

  }, [dataUser])

  return (
    <div className='flex flex-col items-center gap-5'>

      <h1>{dataUser?.teams.name}</h1>
      <img src={`http://localhost:3000/teamFiles/${dataUser?.teams.logo}`} alt="" />

      <div className='flex flex-col items-center h-96 w-3/4 gap-1'>
        {
          dataTeam !== null ? dataTeam.map((item: ITeam) =>
            <div className='w-3/4 bg-green-100 h-20 text-white flex items-center justify-around'>
              <img src={`http://localhost:3000/playerFiles/${item.avatar}`} className='w-16 h-16' alt="" />
              <span>{item.name}</span>
              <span>{item.nationality}</span>
              <span>{item.position}</span>
            </div>
          )

            : <span>Sem jogadores registrados</span>
        }
      </div>

    </div>
  )
}
