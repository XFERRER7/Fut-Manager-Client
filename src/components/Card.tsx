import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFutbol } from '@fortawesome/free-solid-svg-icons'

interface ICardProps {
  color: string
  icon: any
  percentage: string
  title: string
  statistic: string
}

export const Card = ({color, icon, percentage, statistic, title}: ICardProps) => {
  return (
    <div className='bg-white rounded-md shadow-custom w-56 h-36 px-5 py-3 flex flex-col gap-3'>
      <header className='w-full h-10 flex items-center justify-between'>
        <FontAwesomeIcon icon={icon} size='xl' color={color}/>
        <div style={{
          backgroundColor: color
        }} className={`w-14 h-5 text-white rounded-full flex items-center justify-center text-xs font-bold`}>
          <span>{percentage} %</span>
        </div>
      </header>
      <main className='flex-1 flex flex-col gap-1 justify-center text-gray-700 font-bold'>
        <span className='text-2xl'>{statistic}</span>
        <span className='text-gray-400'>{title}</span>
      </main>
    </div>
  )
}
