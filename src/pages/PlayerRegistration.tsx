import { SwiperProps, SwiperSlide } from "swiper/react"
import { InputText } from "../Elements/InputText"
import { Slider } from "../components/Slider"
import { useState } from "react"
import { IPlayer } from "../types/types"
import { formatValue, maskDate } from "../utils/Functions"
import { Select } from "../Elements/Select"
import { positions } from "../utils/positions"


export const PlayerRegistration = () => {

  const settings: SwiperProps = {
    slidesPerView: 1,
    navigation: false,
    pagination: {
      clickable: true
    },
  }

  const [player, setPlayer] = useState<IPlayer>({
    id: '',
    name: '',
    age: 0,
    position: '',
    height: '',
    weight: '',
    avatar: '',
    salary: '',
    birthDate: '',
    isInjured: false,
    nationality: '',
  })


  return (
    <div className="flex h-screen w-screen">

      <div className="bg-primary-100 w-[40%] h-full flex flex-col justify-center font-sans">

        <Slider settings={settings} className={'w-full flex h-full'}>

          <SwiperSlide className="bg-slider3 bg-cover bg-center rounded ">
            <div className="w-full h-full bg-[#000000b6] text-[#ffffff] flex flex-col justify-around px-5 py-24 gap-5">

              <img src="mainLogo.svg" alt="logo" className="w-52 h-52 mx-auto" />

              <div className="flex flex-col gap-5 pl-3">
                <h1 className="text-3xl font-bold">Gerêncie seu time conosco</h1>
                <span>
                  Gerencie seu time com facilidade utilizando nosso sistema de
                  gerenciamento de times! Aqui você tem acesso a uma variedade de
                  recursos para simplificar as tarefas de gerenciamento.
                </span>
              </div>

            </div>
          </SwiperSlide>
          <SwiperSlide className="bg-slider2 bg-cover bg-center rounded">
            <div className="w-full h-full bg-[#000000b6] text-[#ffffff] flex flex-col justify-around px-5 py-24 gap-5">

              <img src="mainLogo.svg" alt="logo" className="w-52 h-52 mx-auto" />

              <div className="flex flex-col gap-5 pl-3">
                <h1 className="text-3xl font-bold">Otimize o desempenho do seu time de futebol</h1>
                <span>
                  Mantenha seus jogadores saudáveis e em forma com nosso sistema de
                  gerenciamento de lesões. Com informações em tempo real sobre o
                  status de seus jogadores, você pode tomar decisões mais informadas sobre
                  quem escalar em seu próximo jogo
                </span>
              </div>

            </div>
          </SwiperSlide>
          <SwiperSlide className="bg-slider1 bg-cover bg-center rounded">
            <div className="w-full h-full bg-[#000000b6] text-[#ffffff] flex flex-col justify-around px-5 py-24 gap-5">

              <img src="mainLogo.svg" alt="logo" className="w-52 h-52 mx-auto" />

              <div className="flex flex-col gap-5 pl-3">
                <h1 className="text-3xl font-bold">Plataforma fácil e intuitiva</h1>
                <span>
                  Não perca mais tempo procurando as informações de seus jogadores!
                  Com nosso sistema de gerenciamento de dados, você pode acessar
                  facilmente as informações de seus jogadores, incluindo idade,
                  salário e status físico, tudo em um só lugar.
                </span>
              </div>

            </div>
          </SwiperSlide>
          <SwiperSlide className="bg-slider4 bg-cover bg-center rounded">
            <div className="w-full h-full bg-[#000000b6] text-[#ffffff] flex flex-col justify-around px-5 py-24 gap-5">

              <img src="mainLogo.svg" alt="logo" className="w-52 h-52 mx-auto" />

              <div className="flex flex-col gap-5 pl-3">
                <h1 className="text-3xl font-bold">Auxílio em decisões importantes</h1>
                <span>
                  Tome decisões estratégicas com base em informações precisas.
                  Com nosso sistema de gerenciamento de dados, você pode analisar as
                  estatísticas de seus jogadores e tomar decisões informadas sobre escalação,
                  trocas e contratações.
                </span>
              </div>

            </div>
          </SwiperSlide>

        </Slider>

      </div>

      <div className="bg-primary-100 flex-1 h-full flex items-center justify-center px-14 py-20">

        <form className="w-full h-full flex flex-col shadow-custom p-7 text-gray-600">

          <h1 className="text-2xl font-semibold text-center">Registro de jogador</h1>

          <div className="w-full flex-1 flex flex-col gap-5 mt-5">

            <div className="flex items-center justify-around">

              <InputText
                label="Nome"
                placeholder="Informe o nome"
                value={player.name}
                onChange={(e) => {
                  setPlayer((prev) => {
                    return {
                      ...prev,
                      name: e.target.value
                    }
                  })
                }}
                formatText={(text) => {
                  return text.toString()[0].toUpperCase() + text.toString().slice(1)
                }}
              />

              <InputText
                label="Data de nascimento"
                placeholder="DD/MM/AAAA"
                formatText={(text) => {
                  return maskDate(text.toString())
                }}
                value={player.birthDate}
                onChange={(e) => {
                  setPlayer((prev) => {
                    return {
                      ...prev,
                      birthDate: e.target.value
                    }
                  })
                }}
              />


            </div>

            <div className="flex items-center justify-around">

              <Select
                label="Posição"
                value={player.position}
                options={positions.map((position) => {
                  return {
                    value: position.name,
                    label: position.name
                  }}
                )}
                onChange={(e) => {
                  setPlayer((prev) => {
                    return {
                      ...prev,
                      position: e.target.value
                    }
                  })
                }}
              />

              <InputText 
              label="Altura"
              placeholder="Informe a altura"
              value={player.height}
              onChange={(e) => {
                setPlayer((prev) => {
                  return {
                    ...prev,
                    height: e.target.value
                  }
                })
              }}
              formatText={(text) => {
                return formatValue(text, 2, 2)
              }}

              />

            </div>

          </div>

        </form>

      </div>

    </div>
  )
}
