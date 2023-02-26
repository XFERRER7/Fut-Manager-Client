import { useNavigate } from "react-router-dom";

interface IPropsHeader {
  isLogin: boolean;
}

export const Header = ({isLogin}: IPropsHeader) => {

  const navigate = useNavigate()

  return (
    <header className="w-full h-14 flex justify-between items-center">

      <img className="h-24 w-32" src="mainLogo.svg" alt="" />

      <div className="">
        <li className="list-none flex gap-8 text-white font-sans font-bold">
          <ul className="hover:scale-105 transition-all">Home</ul>
          {
            isLogin ? 
            <ul className="hover:scale-105 transition-all" onClick={() => {
              navigate('/signup')
            }}>Sign Up</ul>
            :
            <ul className="hover:scale-105 transition-all" onClick={() => {
              navigate('/')
            }}>Sign In</ul>
          }
          
          <ul className="hover:scale-105 transition-all">Sobre nós</ul>
          <ul className="hover:scale-105 transition-all">Contato</ul>
        </li>
      </div>
    </header>
  )
}
