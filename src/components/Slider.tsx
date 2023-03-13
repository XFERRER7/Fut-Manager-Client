import { Swiper, SwiperProps } from 'swiper/react'
import SwiperCore, { Navigation, Pagination, A11y } from 'swiper'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import '../styles/slider.css'

interface SliderProps {
  settings: SwiperProps
  children: React.ReactNode
  className?: string
}

export const Slider = ({ settings, children, className }: SliderProps) => {

  SwiperCore.use([Navigation, Pagination]);

  return (
    <Swiper modules={[
      Navigation,
      Pagination,
      A11y
    ]} {...settings} className={className}>
      {children}
    </Swiper>
  )
}
