import axios from "axios"
import { FormEvent, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Header } from "../components/Header"
import { useApi } from "../service/api"
import useUserStore from "../stores/AuthStore"
import { IUserSignIn } from "../types/types"

export const Login = () => {

  const [user, setUser] = useState<IUserSignIn>({
    email: '',
    password: ''
  })

  const { setUserData } = useUserStore();

  const [error, setError] = useState<string>('')

  const nav = useNavigate()

  const api = useApi()

  const handleLogin = async (e: FormEvent) => {

    e.preventDefault()

    try {

      const res = await api.signIn(user)

      if (res.token) {

        setError('')
        setUserData(user.email, user.password, res.token, res.idUser)

        const resTeam = await api.getDataUser(res.idUser, res.token)

        if(resTeam.teams) {
          nav('/dashboard')
        }else {
          nav('/home')
        }
        
      }

    }
    catch (err: any) {
      console.log(err)
      setError('E-mail ou senha incorretos')
    }
  
  }

  const navigate = useNavigate()

  return (
    <div className="w-full h-screen p-8 bg-[#F5F5F5]">
      <div className="w-full h-full bg-green-100 rounded-3xl flex flex-col justify-between">

        <div className="w-full mt-8 relative px-14">
          <Header isLogin={true} />

          <div className="w-full h-72 mt-10 flex justify-between">
            <img src="bigImageHome_thumbnail.png" className="h-64" alt="" />



            <form className="h-80 w-80 bg-[#F5F5F5] rounded-xl flex flex-col gap-1 pl-8 justify-around font-sans">

              <div className="flex flex-col gap-1">
                <h1 className="text-2xl font-Playfair text-green-900 font-black mt-2">Bem vindo de volta</h1>
                <span className="text-sm text-gray-400">Preencha seus dados de login, por favor</span>
              </div>

              <input type="text" placeholder="Informe o e-mail"
                className="bg-gray-50 h-10 border border-green-100 text-gray-900 text-sm rounded-lg block w-64 p-2.5"
                onChange={(e) => {
                  setUser({
                    ...user,
                    email: e.target.value
                  })
                }}
              />
              <input type="text" placeholder="Informe a senha"
                className="bg-gray-50 h-10 border border-green-100 text-gray-900 text-sm rounded-lg block w-64 p-2.5"
                onChange={(e) => {
                  setUser({
                    ...user,
                    password: e.target.value
                  })
                }}
              />


              <span className="text-red-500 text-xs">{error}</span>

              <div className="pr-8 flex justify-center">
                <button className="w-48 h-12 rounded-md text-white
                bg-gradient-to-r from-[#63aa6e] to-[#214927]"
                onClick={(e) => {
                  handleLogin(e)
                }}
                >
                  Entrar
                </button>
              </div>

              <span className="text-sm">Não possui uma conta?
                <a className="ml-[0.9px] font-bold cursor-pointer hover:text-green-100 transition-all" onClick={() => {
                  navigate('/signup')
                }}>Registrar-se</a>
              </span>

            </form>

          </div>

        </div>

        <div className="w-2/4 h-28 bg-[#F5F5F5] rounded-tr-full flex justify-center items-center gap-3">
          <img className="w-32 h-32" src="/logo2.svg" alt="" />
          <div>
            <span className="text-2xl font-bold">Fut Manager</span>
            <p className="italic">Administre seu time conosco</p>
          </div>
        </div>
      </div>
    </div>
  )
}
