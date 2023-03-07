import React from 'react'
import { IPlayer } from '../types/types'

interface ICardPlayerProps extends IPlayer {
  onClick?: (id: string) => void | undefined
}

export const CardPlayer = ({
  age, avatar, birthDate, height, id, isInjured, name, nationality,
  position, salary, weight, onClick
}: ICardPlayerProps) => {

  return (
    <div
      className='w-full px-2 relative bg-white cursor-pointer rounded shadow-custom h-20 flex items-center justify-between'
      onClick={() => onClick && onClick(id)}
    >

      <div style={{

        backgroundColor: position === 'Goleiro' ? '#1B2C6D'
          : position === 'Defensor' ? '#1B2C6D'
            : position === 'Atacante' ? '#C92114'
              : position === 'Ponta esquerda' ? '#C92114'
                : position === 'Ponta direita' ? '#C92114'
                  : position === 'Meio campo' ? '#228B22'
                    : '#ffffff'







      }} className='h-full w-5 rounded-tl rounded-bl bg-red-600 absolute left-0' />

      <div className='w-48 h-full flex items-center justify-center'>
        <span className='text-gray-600 text-left font-semibold'>{name}</span>
      </div>
      <div className='w-48 h-full flex items-center justify-center'>
        <span className='text-gray-600 text-left font-semibold'>{position}</span>
      </div>
      <div className='w-48 h-full flex items-center justify-center'>
        <span className='text-gray-600 text-left font-semibold'>{nationality}</span>
      </div>
      <div className='w-48 h-full flex items-center justify-center'>
        <span className='text-gray-600 text-left font-semibold'>Idade: {age}</span>
      </div>
    </div>
  )
}