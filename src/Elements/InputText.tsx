import React from 'react'

interface IInputProps {
  label: string
  placeholder: string
  value: string | number
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  formatText: (text: string | number) => string
}

export const InputText = ({ label, value, placeholder, onChange, formatText }: IInputProps) => {
  return (
    <div className='flex flex-col gap-1'>
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
        {label}
      </label>
      <input
        className="appearance-none block w-64 bg-gray-200 text-gray-700 
        border border-gray-200 rounded py-3 px-4 mb-3 leading-tight 
        focus:outline-none focus:bg-white"
        type="text"
        onChange={onChange}
        value={value !== '' ? formatText(value) : ''}
        placeholder={placeholder}
      />
    </div>
  )
}
