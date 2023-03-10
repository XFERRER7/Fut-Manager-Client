import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import { itemsSidebar } from '../utils/itemsSidebar';

export const SearchBar = () => {

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [sugestions, setSuggestions] = useState(itemsSidebar)


  return (
    <div className='relative'>
      <div
        className="relative text-gray-600 focus-within:text-gray-800"
      >
        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
          <FontAwesomeIcon icon={faSearch} className="h-4 w-4" />
        </span>
        <input
          className="py-2 px-1 w-full rounded-md pl-10 border border-gray-300 focus:outline-none focus:border-gray-500"
          type="search"
          placeholder="Pesquise..."
          aria-label="Search"
          onChange={(e) => {
            setSearch(e.target.value)
            if (e.target.value !== '') {
              setIsDropdownOpen(true)
            }
            else if (e.target.value === '') {
              setIsDropdownOpen(false)
            }
          }}
        />
      </div>

      <div className="relative">
        <div
          className={`${isDropdownOpen ? 'block' : 'hidden'
            } absolute z-10 left-0 mt-2 w-full rounded-md bg-white shadow-lg`}
        >
          {

            search == '' ? sugestions.map((item, index) => (
              <div
                key={index}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  setIsDropdownOpen(false);
                }}
              >
                <FontAwesomeIcon icon={item.icon} className="mr-2" />
                <span>{item.title}</span>
              </div>
            ))
              :
              sugestions.filter((item) => item.title.toLowerCase().includes(search.toLowerCase())).map((item, index) => (
                <div
                  key={index}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    setIsDropdownOpen(false);
                  }}
                >
                  <FontAwesomeIcon icon={item.icon} className="mr-2" />
                  <span>{item.title}</span>
                </div>
              ))

          }
        </div>
      </div>

    </div>
  )
}
