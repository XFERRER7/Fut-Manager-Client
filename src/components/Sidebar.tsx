import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPeopleGroup } from '@fortawesome/free-solid-svg-icons'
import { faPersonCirclePlus } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faMedal } from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlassPlus } from '@fortawesome/free-solid-svg-icons'

export const Sidebar = () => {
  return (
    <nav className='bg-green-900 rounded-lg h-full w-[23%] text-white font-sans flex flex-col'>

      <div className="flex items-center gap-3 w-full">
        <img className="h-24 w-32" src="mainLogo.svg" alt="logo" />
        <span className="font-bold text-lg">Fut Manager</span>
      </div>

      <div className="w-[90%] mx-auto bg-gray-300 border-t"></div>

      <div className="flex font-Playfair w-full h-2/4 flex-col mt-10 
      items-center justify-between px-10">

        <div className="w-full flex items-center gap-5 bg-[#F4FBF7] p-2 rounded text-green-900">
          <FontAwesomeIcon icon={faPeopleGroup} color={'#22543D'} size={'lg'}/>
          <span className="font-bold">Meu Time</span>
        </div>

        <div className="w-full flex items-center gap-5 p-2 rounded">
          <FontAwesomeIcon icon={faPersonCirclePlus} color={'white'} size={'lg'}/>
          <span className="font-bold">Adicionar Jogador</span>
        </div>

        <div className="w-full flex items-center gap-5 p-2 rounded">
          <FontAwesomeIcon icon={faUser} color={'white'} size={'lg'}/>
          <span className="font-bold">Meu perfil</span>
        </div>

        <div className="w-full flex items-center gap-5 p-2 rounded">
          <FontAwesomeIcon icon={faMedal} color={'#FDE68A'} size={'lg'}/>
          <span className="font-bold text-yellow-300">Fut Premium</span>
        </div>

        <div className="w-full flex items-center gap-5 p-2 rounded">
          <FontAwesomeIcon icon={faMagnifyingGlassPlus} color={'white'} size={'lg'}/>
          <span className="font-bold">Sobre nós</span>
        </div>

      </div>

    </nav>
  )
}
