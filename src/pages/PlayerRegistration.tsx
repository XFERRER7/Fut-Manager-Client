import { SwiperProps, SwiperSlide } from "swiper/react"
import { Slider } from "../components/Slider"


export const PlayerRegistration = () => {

  const settings: SwiperProps = {
    slidesPerView: 1,
    navigation: false,
    pagination: {
      clickable: true
    },
  }

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

      <div className="bg-blue-200 flex-1 h-full">

      </div>

    </div>
  )
}
