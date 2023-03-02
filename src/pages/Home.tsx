import React, { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useApi } from '../service/api';
import useStoreAuth from '../stores/AuthStore'

export const Home = () => {

  const { idUser } = useStoreAuth()

  const [shield, setShield] = useState<File | null>(null);
  const [name, setName] = useState('');

  const api = useApi()

  const nav = useNavigate()

  const handleClick = async (e: FormEvent) => {

    e.preventDefault()

    try {

      const userId = idUser

      const res = await api.createTeam({name, userId, shield})

      if(res.id) {
        nav('/dashboard')
      }
    }
    catch (error) {
      console.log(error)
    }


  }

  return (
    <div className='flex flex-col justify-center items-center gap-20 p-20'>
      <h1>Cadastro de time</h1>
      <form action="" className='flex flex-col gap-10'>

        <div className='flex flex-col items-center gap-2'>
          <label htmlFor="">Escolha o Brasão da equipe</label>
          <input type="file" onChange={(e) => setShield(e.target.files?.[0] || null)} />
        </div>

        <div className='flex flex-col items-center gap-2'>
          <label htmlFor="">Informe o nome da equipe</label>
          <input type="text"
            onChange={(e) => setName(e.target.value)}
            className="bg-gray-50 h-10 border border-green-100 text-gray-900 text-sm rounded-lg block w-64 p-2.5" />
        </div>

        <button className="w-48 h-12 rounded-md text-white mx-auto
        bg-gradient-to-r from-[#63aa6e] to-[#214927]" onClick={handleClick}>Cadastrar equipe</button>
      </form>
    </div>
  )
}
