import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Header } from "../components/Header"
import { useApi } from "../service/api"

export const SignUp = () => {

  const navigate = useNavigate()
  const api = useApi()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [error, setError] = useState<string>('')

  const handleLogin = async (e: { preventDefault: () => void }) => {
    e.preventDefault()

    try {
      const res = await api.signUp({
        email,
        password,
        name
      })
      
      if (res.data.id) {
        navigate('/')
        setError('')
      }
    }
    catch (err: any) {
      setError('Dados inválidos')
      console.log(err)
    }
  }

  return (
    <div className="w-full h-screen p-8 bg-[#F5F5F5]">
      <div className="w-full h-full bg-green-100 rounded-3xl flex flex-col justify-between">

        <div className="w-full mt-8 relative px-14">
          <Header isLogin={false} />

          <div className="w-full h-72 mt-10 flex justify-between">
            <img src="bigImageHome_thumbnail.png" className="h-64" alt="" />



            <form className="h-80 w-80 bg-[#F5F5F5] rounded-xl flex flex-col gap-1 pl-8 pb-1 justify-around font-sans">

              <div className="flex flex-col gap-1">
                <h1 className="text-2xl font-Playfair text-green-900 font-black mt-2">Crie uma conta</h1>
                <span className="text-sm text-gray-400">Informe seus dados de cadastro, por favor</span>
              </div>

              <input type="text" placeholder="Informe o seu e-mail" onChange={(e) => {
                setEmail(e.target.value)
              }}
                className="bg-gray-50 h-10 border border-green-100 text-gray-900 text-sm rounded-lg block w-64 p-2.5" />

              <input type="text" placeholder="Informe a sua senha" onChange={(e) => {
                setPassword(e.target.value)
              }}
                className="bg-gray-50 h-10 border border-green-100 text-gray-900 text-sm rounded-lg block w-64 p-2.5" />

              <input type="text" placeholder="Informe o seu username" onChange={(e) => {
                setName(e.target.value)
              }}
                className="bg-gray-50 h-10 border border-green-100 text-gray-900 text-sm rounded-lg block w-64 p-2.5" />

              <span className="text-red-500 text-xs block">{error}</span>

              <div className="pr-8 flex justify-center">
                <button className="w-48 h-12 rounded-md text-white
                bg-gradient-to-r from-[#63aa6e] to-[#214927]" onClick={handleLogin}>
                  Criar
                </button>
              </div>

              <span className="text-sm">Já possui uma conta?
                <a className="ml-[0.9px] font-bold hover:text-green-100 transition-all" onClick={() => {
                  navigate('/')
                }}>Fazer login</a>
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
