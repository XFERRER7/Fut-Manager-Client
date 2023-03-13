import React from 'react'


interface IOption {
  value: string
  label: string
}

interface ISelectProps {
  label: string
  value: string
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void
  options: IOption[]
}


export const Select = ({ label, value, onChange, options }: ISelectProps) => {
  return (
    <div className='flex flex-col gap-1'>
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
        {label}
      </label>

      <select
        className="block w-64 bg-gray-200 text-gray-700 
        border border-gray-200 rounded py-3 px-1 mb-3 leading-tight 
        focus:outline-none focus:bg-white"
        onChange={onChange}
        value={value}
      >

        <option value="" selected disabled>Selecione</option>
        {
          options.map((option, index) => {
            return (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            )
          })
        }

      </select>
    </div>
  )
}
