import { useNavigate } from "react-router-dom"
import useUserStore from "../stores/AuthStore"

interface INavbarProps {
  title: string
}

export const Navbar = ({title}: INavbarProps) => {

  const { removeUserData } = useUserStore()
  const nav = useNavigate()

  const handleLogout = () => {

    removeUserData()
    
    nav('/')

  }

  return (
    <header className='w-full h-28 bg-green-100 flex justify-around items-center'>
      <img className="h-24 w-32" src="mainLogo.svg" alt="logo" />
      <h1 className='font-Playfair text-white text-2xl font-bold'>{title}</h1>
      <button 
      onClick={handleLogout}
      className='bg-white hover:bg-green-200 transition-colors text-green-900 font-bold py-2 px-4 rounded'>Logout</button>
    </header>
  )
}
