import { FormEvent, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useApi } from '../service/api';
import useStoreAuth from '../stores/AuthStore'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile } from '@fortawesome/free-solid-svg-icons'
import { Navbar } from '../components/Navbar';

export const Home = () => {

  const { idUser } = useStoreAuth()

  const [shield, setShield] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [name, setName] = useState('');

  const api = useApi()

  const nav = useNavigate()

  const handleClick = async (e: FormEvent) => {

    e.preventDefault()

    try {

      const userId = idUser

      const res = await api.createTeam({ name, userId, shield })

      if (res.id) {
        nav('/dashboard')
      }
    }
    catch (error) {
      console.log(error)
    }


  }

  useEffect(() => {
    if (shield !== null) {
      const objectUrl = URL.createObjectURL(shield);
      setPreview(objectUrl);
    }
  }, [shield]);

  return (
    <div className='w-full h-screen text-white flex flex-col'>
      <Navbar title='Cadastro de time'/>

      <form className='w-full flex-1 flex flex-col justify-center items-center gap-5'>

        <div className='flex items-center gap-5'>
          <label className="cursor-pointer text-gray-600 text-lg font-bold">Nome da equipe:</label>

          <input type="text" placeholder="Informe o nome do time"
            className="bg-gray-50 h-10 border border-green-100 text-gray-900 text-sm rounded block w-80 p-2.5"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className={`relative flex flex-col ${shield !== null ? 'bg-white text-white' : 'bg-gray-200 text-gray-400'} items-center justify-center w-[60%] h-80 border rounded-lg py-6 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline`}>
          <div className="flex items-center justify-center overflow-hidden">
            {preview !== null ? (
              <div className='flex flex-col '>
                <img className="w-full h-full object-cover opacity-80 " src={preview} alt="Preview" />
                <span className="ml-2 text-gray-600">
                  Clique para selecionar outro arquivo
                </span>
              </div>
            ) : (
              <span className="ml-2">
                Arraste e solte o arquivo aqui ou clique para selecionar um arquivo
              </span>
            )}
          </div>

          {
            shield == null && (
              <div>
                <FontAwesomeIcon color='gray' width={300} height={300} icon={faFile} />
              </div>
            )
          }

          <input
            type="file"
            id="file-input"
            name="file-input"
            onChange={(e) => setShield(e.target.files?.[0] || null)}
            className="opacity-0 absolute inset-0 z-50 w-full h-full cursor-pointer" />
        </div>

        <button
          className='bg-green-800 hover:bg-green-100 transition-colors text-white font-bold py-2 px-4 rounded'
          onClick={handleClick}
        >Cadastrar
        </button>

      </form>

    </div>
  )
}

{/* <div className='flex flex-col justify-center items-center gap-20 p-20'>
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
    </div> */}
