import React from 'react'
import Button from '@mui/material/Button';
import { FaSearch } from "react-icons/fa";

function Search() {
  return (
    <>
      <div className='searchBox w-[100%] h-[50px] bg-[#e5e5e5] rounded-xl relative p-2'>
        <input type="search" placeholder='Search For Products...' className='[&::-webkit-search-cancel-button]:hidden [&::-webkit-search-decoration]:hidden placeholder:text-gray-700 w-full h-[35px] bg-inherit focus:outline-none p-2' />
        <Button className='!absolute top-[5px] right-1 w-[38px] h-[38px] !min-w-9 !rounded-full'><FaSearch className='text-[18px]' /></Button>

      </div>
    </>
  )
}

export default Search
