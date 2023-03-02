import React, { useEffect, useState } from 'react'
import { useApi } from '../service/api'
import useUserStore from '../stores/AuthStore'

interface IDataUser {
  id: number
  name: string
  email: string
  password: string
  teams: {
    id: number
    name: string
    logo: string
  }
}

export const Dashboard = () => {

  const [dataUser, setDataUser] = useState<IDataUser | null>(null)


  const api = useApi()
  const { idUser } = useUserStore()

  const getDataUser = async () => {
    const res = await api.getDataUser(idUser)

    return res
  }

  useEffect(() => {

    getDataUser()
      .then(res => {
        setDataUser(res)
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })

  }, [])

  return (
    <div>

      <h1>{dataUser?.teams.name}</h1>
      <img src={`http://localhost:3000/teamFiles/${dataUser?.teams.logo}`} alt="" />
    </div>
  )
}
