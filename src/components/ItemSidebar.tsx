import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ISidebarItem } from '../types/types'

interface IItemSidebarProps extends ISidebarItem {
  itemSelected: 'Meu Time' | 'Adicionar Jogador' | 'Meu perfil' | 'Fut Premium' | 'Sobre nós';
}

export const ItemSidebar = ({ icon, title, itemSelected }: IItemSidebarProps) => {
  return (
    <>
      {
        title === itemSelected ?
          <div className="w-full flex items-center gap-5 bg-[#F4FBF7] p-2 cursor-pointer rounded text-green-900">
            <FontAwesomeIcon icon={icon} color={'#22543D'} size={'lg'} />
            <span className="font-bold">{title}</span>
          </div>
          :
          <div className="w-full flex items-center gap-5 p-2 cursor-pointer rounded">
            <FontAwesomeIcon icon={icon} color={'white'} size={'lg'} />
            <span className="font-bold text-white">{title}</span>
          </div>
      }
    </>
  )
}
