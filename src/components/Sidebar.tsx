import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { itemsSidebar } from "../utils/itemsSidebar"
import { useEffect, useState } from "react"
import { ISidebarItem } from "../types/types";
import { ItemSidebar } from "./ItemSidebar";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons"
import useUserStore from "../stores/AuthStore";



interface ISidebarProps {
  itemSelected: 'Meu Time' | 'Adicionar Jogador' | 'Meu perfil' | 'Fut Premium' | 'Sobre nós';
}

export const Sidebar = ({ itemSelected }: ISidebarProps) => {

  const [items, setItems] = useState<ISidebarItem[]>([])

  const { name } = useUserStore()
  const { email } = useUserStore()

  useEffect(() => {

    setItems(itemsSidebar)

  }, [])

  return (
    <nav className='bg-green-900 rounded-lg h-full w-[23%] text-white font-sans flex flex-col'>

      <div className="flex items-center gap-3 w-full">
        <img className="h-24 w-32" src="mainLogo.svg" alt="logo" />
        <span className="font-bold text-lg">Fut Manager</span>
      </div>

      <div className="w-[90%] mx-auto bg-gray-300 border-t"></div>

      <div className="flex font-Playfair w-full h-2/4 flex-col mt-10 
      items-center justify-between px-10">

        {
          items.map(item => <ItemSidebar icon={item.icon} title={item.title} itemSelected={itemSelected} />)
        }

      </div>
      <div className="flex font-Playfair w-full flex-col mt-10 
      items-center justify-between px-10 cursor-pointer gap-2">

        <div className="w-full flex items-center gap-5 p-2 rounded">
          <FontAwesomeIcon icon={faSignOutAlt} color={'white'} size={'lg'} />
          <span className="font-bold">Logout</span>
        </div>

        <div className="flex w-full gap-5">

          <div>
            <div className='flex flex-col items-center w-8 h-8 bg-white rounded-full justify-center text-sm'>
              <span className='text-green-900 font-bold text-lg uppercase'>{name[0]}</span>
            </div>
          </div>

          <div className="flex flex-col text-xs">
            <span>{name}</span>
            <span>{email}</span>
          </div>

        </div>

      </div>
    </nav>
  )
}


{/* <div className="w-full flex items-center gap-5 bg-[#F4FBF7] p-2 rounded text-green-900">
  <FontAwesomeIcon icon={faPeopleGroup} color={'#22543D'} size={'lg'} />
  <span className="font-bold">Meu Time</span>
</div> */}