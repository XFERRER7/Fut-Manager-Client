import React, { useState } from 'react'
import { IPlayer } from '../types/types'

interface IPlayerModalProps extends IPlayer {
  setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const PlayerModal = ({ age, avatar,
  birthDate, height, id, isInjured, name,
  nationality, position, salary, weight, setModalIsOpen }: IPlayerModalProps) => {

  const [player, setPlayer] = useState<IPlayer>({
    age,
    avatar,
    birthDate,
    height,
    id,
    isInjured,
    name,
    nationality,
    position,
    salary,
    weight
  })

  const closeModal = () => {
    setModalIsOpen(false)
  }

  return (

    <div className="fixed inset-0 z-40 bg-[#0000007a] flex justify-center items-center">
      <div className="w-3/4 h-3/4 bg-white relative z-50 rounded-md flex flex-col items-center gap-5 py-5 px-8">

        <img className='w-28 h-28 rounded-full object-cover object-center'
          src={`http://localhost:3000/playerFiles/${avatar}`} alt="imagem do jogador" />
        <h1 className='font-bold text-2xl text-gray-700'>{name}</h1>

        <div className='flex-1 w-full flex flex-col gap-5'>
          <div className="w-full flex justify-around items center">

            <div className='flex flex-col gap-1'>
              <label htmlFor="" className='text-gray-500'>Altura</label>
              <input className='p-3 w-56 h-10 border-2 border-gray-400 rounded-md'
                type="text" value={player.height} onChange={(e) => setPlayer(prev => {

                  return { ...prev, height: e.target.value }
                })} />
            </div>

            <div className='flex flex-col gap-1'>
              <label htmlFor="" className='text-gray-500'>Peso</label>
              <input className='p-3 w-56 h-10 border-2 border-gray-400 rounded-md'
                type="text" value={player.weight} onChange={(e) => setPlayer(prev => {

                  return { ...prev, weight: e.target.value }
                })} />
            </div>

            <div className='flex flex-col gap-1'>
              <label htmlFor="" className='text-gray-500'>Idade</label>
              <input className='p-3 w-56 h-10 border-2 border-gray-400 rounded-md'
                type="number" value={player.age == 0 ? '' : player.age} onChange={(e) => setPlayer(prev => {

                  return { ...prev, age: Number(e.target.value) }
                })} />
            </div>

            <div className='flex flex-col gap-1'>
              <label htmlFor="" className='text-gray-500'>Nacionalidade</label>
              <input className='p-3 w-56 h-10 border-2 border-gray-400 rounded-md'
                type="text" value={player.nationality} onChange={(e) => setPlayer(prev => {

                  return { ...prev, nationality: e.target.value }
                })} />
            </div>



          </div>

          <div className="w-full flex justify-around items center">

            <div className='flex flex-col gap-1'>
              <label htmlFor="" className='text-gray-500'>Data de Nascimento</label>
              <input className='p-3 w-56 h-10 border-2 border-gray-400 rounded-md'
                type="date" value={player.birthDate} onChange={(e) => setPlayer(prev => {

                  return { ...prev, birthDate: e.target.value }
                })} />
            </div>

            <div className='flex flex-col gap-1'>
              <label htmlFor="" className='text-gray-500'>Salário</label>
              <input className='p-3 w-56 h-10 border-2 border-gray-400 rounded-md'
                type="text" value={player.salary} onChange={(e) => setPlayer(prev => {

                  return { ...prev, salary: e.target.value }
                })} />
            </div>

            <div className='flex flex-col gap-1'>
              <label htmlFor="" className='text-gray-500'>Posição</label>
              <input className='p-3 w-56 h-10 border-2 border-gray-400 rounded-md'
                type="text" value={player.position} onChange={(e) => setPlayer(prev => {

                  return { ...prev, position: e.target.value }
                })} />
            </div>

            <div className='flex flex-col gap-3 w-56 h-10 items-center'>
              <label htmlFor="" className='text-gray-500'>Está Lesionado?</label>
              <div className="flex gap-5">
                <label>
                  <input
                    type="radio"
                    name="isInjured"
                    className='mr-1'
                    value="true"
                    checked={player.isInjured === true}
                    onChange={(e) => setPlayer(prev => {
                      return { ...prev, isInjured: true }
                    })}
                  />
                  <span className='text-sx text-gray-700'>Sim</span>
                </label>
                <label>
                  <input
                    type="radio"
                    name="isInjured"
                    value=" false"
                    className='mr-1'
                    checked={player.isInjured === false}
                    onChange={(e) => setPlayer(prev => {
                      return { ...prev, isInjured: false }
                    })}
                  />
                  <span className='text-sx text-gray-700'>Não</span>
                </label>
              </div>
            </div>


          </div>

        </div>

        <div className='w-full flex items-center gap-10 justify-center'>
          <button
            onClick={closeModal}
            className='bg-green-100 hover:bg-green-900 transition-colors text-white font-bold py-2 px-4 rounded'>Fechar</button>

          <button
            onClick={() => {

            }}
            className='bg-green-100 hover:bg-green-900 transition-colors text-white font-bold py-2 px-4 rounded'>Atualizar</button>
        </div>

      </div>
    </div>
  )
}

// <input type="text" className='w-56 h-10 border rounded' value={age}/>
//             <input type="text" className='w-32 h-10 border rounded' value={isInjured ? 'Lesionado: Sim' : 'Lesionado: Não'}/>
//             <input type="text" className='w-32 h-10 border rounded' value={isInjured ? 'Lesionado: Sim' : 'Lesionado: Não'}/>