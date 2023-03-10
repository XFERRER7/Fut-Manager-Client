import React, { useEffect, useRef, useState } from 'react'
import { useApi } from '../service/api'
import { IPlayer } from '../types/types'
import { positions } from '../utils/positions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { maskDate } from '../utils/Functions'

interface IPlayerModalProps extends IPlayer {
  setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  getPlayers: () => void
  setStatus: React.Dispatch<React.SetStateAction<string>>
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
}

export const PlayerModal = ({ age, avatar,
  birthDate, height, id, isInjured, name,
  nationality, position, salary, weight, setModalIsOpen, getPlayers, setStatus, setIsLoading }: IPlayerModalProps) => {

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

  const [btnIsDisabled, setBtnIsDisabled] = useState(true)
  const inputName = useRef<HTMLInputElement>(null)

  const [prevPlayer,] = useState<IPlayer>(player);
  const api = useApi()

  const closeModal = () => {
    setModalIsOpen(false)
  }

  const formatValue = (value: string | number, minimumFractionDigits: number, maximumFractionDigits: number) => {

    return value.toLocaleString(
      'pt-br',
      {
        minimumFractionDigits,
        maximumFractionDigits,
      }
    )
  }

  const handleUpdate = async () => {

    const data: Partial<any> = {};

    for (const key of Object.keys(player)) {
      if (player[key as keyof IPlayer] !== prevPlayer[key as keyof IPlayer]) {

        if ([key as keyof IPlayer][0] == 'weight') {
          const weight = player[key as keyof IPlayer].toString().replace(',', '.')
          console.log(Number(weight))
          data[key as keyof IPlayer] = Number(weight)
        }
        else if ([key as keyof IPlayer][0] == 'salary') {
          const salary = player[key as keyof IPlayer].toString().replace(',', '.')
          console.log(Number(salary))
          data[key as keyof IPlayer] = Number(salary)
        }
        else if ([key as keyof IPlayer][0] == 'height') {
          const height = player[key as keyof IPlayer].toString().replace(',', '.')
          console.log(Number(height))
          data[key as keyof IPlayer] = Number(height)
        }
        else {
          data[key as keyof IPlayer] = player[key as keyof IPlayer];
        }
      }
    }

    const dataPlayer = {
      id,
      data
    }

    console.log(dataPlayer)

    if (Object.keys(data).length > 0) {

      await api.updatePlayer(dataPlayer)
        .then(() => {
          getPlayers()
          setModalIsOpen(false)
          setStatus('success')
        })
        .catch(() => {
          setModalIsOpen(false)
          setStatus('error')
        })
    }
    else {
      setModalIsOpen(false)
      setStatus('error')
    }
  }


  useEffect(() => {
    setIsLoading(false)
  }, [])

  useEffect(() => {
    if (btnIsDisabled === false) {
      inputName.current?.focus()
    }
  }, [btnIsDisabled])

  return (

    <div className="fixed inset-0 z-40 bg-[#0000007a] flex justify-center items-center">
      <div className="w-3/4 h-3/4 bg-white relative z-50 rounded-md flex flex-col items-center gap-5 py-5 px-8 animate-modal">

        <img className='w-28 h-28 rounded-full object-cover object-center'
          src={`http://localhost:3000/playerFiles/${avatar}`} alt="imagem do jogador" />
        <div className='flex items-center gap-3'>
        <FontAwesomeIcon onClick={() => {
            setBtnIsDisabled(!btnIsDisabled)
          }} icon={faPenToSquare} className='text-gray-500' />
          <input
            className='font-bold text-2xl text-center text-gray-700'
            value={player.name}
            ref={inputName}
            disabled={btnIsDisabled}
            onChange={(e) => {
              setPlayer(prev => {
                return { ...prev, name: e.target.value }
              })
            }}
          />
          
        </div>

        <div className='flex-1 w-full flex flex-col gap-5'>
          <div className="w-full flex justify-around items center">

            <div className='flex flex-col gap-1'>
              <label htmlFor="" className='text-gray-500'>Altura</label>
              <input className='p-3 w-56 h-10 border-2 border-gray-400 rounded-md'
                type="text" value={formatValue(player.height, 2, 2).replace(',', '.')} onChange={(e) => setPlayer(prev => {

                  return { ...prev, height: e.target.value }
                })} />
            </div>

            <div className='flex flex-col gap-1'>
              <label htmlFor="" className='text-gray-500'>Peso</label>
              <input className='p-3 w-56 h-10 border-2 border-gray-400 rounded-md'
                type="text" value={formatValue(player.weight, 2, 2).replace(',', '.')} onChange={(e) => setPlayer(prev => {

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
                type="text" value={maskDate(player.birthDate)} onChange={(e) => setPlayer(prev => {

                  return { ...prev, birthDate: e.target.value }
                })} />
            </div>

            <div className='flex flex-col gap-1'>
              <label htmlFor="" className='text-gray-500'>Sal??rio</label>
              <input className='p-3 w-56 h-10 border-2 border-gray-400 rounded-md'
                type="text" value={formatValue(player.salary, 3, 3)} onChange={(e) => setPlayer(prev => {

                  return { ...prev, salary: e.target.value }
                })} />
            </div>

            <div className='flex flex-col gap-1'>
              <label htmlFor="" className='text-gray-500'>Posi????o</label>
              <select className='px-3 w-56 h-10 border-2 border-gray-400 rounded-md'
                value={player.position} onChange={(e) => setPlayer(prev => {

                  return { ...prev, position: e.target.value }
                })}>
                {
                  positions.map(position => {
                    return <option key={position.name} value={position.name}>{position.name}</option>
                  })
                }
              </select>
            </div>

            <div className='flex flex-col gap-3 w-56 h-10 items-center'>
              <label htmlFor="" className='text-gray-500'>Est?? Lesionado?</label>
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
                  <span className='text-sx text-gray-700'>N??o</span>
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
            onClick={handleUpdate}
            className='bg-green-100 hover:bg-green-900 transition-colors text-white font-bold py-2 px-4 rounded'>Atualizar</button>
        </div>

      </div>
    </div>
  )
}