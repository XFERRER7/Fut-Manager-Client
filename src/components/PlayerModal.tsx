import React from 'react'
import { IPlayer } from '../types/types'

interface IPlayerModalProps extends IPlayer {
  setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const PlayerModal = ({ age, avatar, 
  birthDate, height, id, isInjured, name, 
  nationality, position, salary, weight, setModalIsOpen }: IPlayerModalProps) => {

    const closeModal = () => {
      setModalIsOpen(false)
    }

  return (
    <div className='flex flex-col gap-1 items-center'>
      <span onClick={closeModal}>Fechar</span>
      <span>{age}</span>
      <span>{avatar}</span>
      <span>{birthDate}</span>
      <span>{height}</span>
      <span>{id}</span>
      <span>{isInjured}</span>
      <span>{name}</span>
      <span>{nationality}</span>
      <span>{position}</span>
      <span>{salary}</span>
      <span>{weight}</span>
    </div>
  )
}
