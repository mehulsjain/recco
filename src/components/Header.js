import { Badge } from "@material-tailwind/react";
import React from "react";

const Header = () => {
  return(
    <nav className='w-full h-20 px-12 bg-green-900 flex items-center text-white items-center border'>
      <div className='font-semibold text-3xl w-auto'>Recco</div>
      <ul className='pl-2 flex justify-evenly text-l w-1/3 flex-row'>
        <li> Store </li>
        <li> Orders </li>
        <li> Analytics </li>
      </ul>
      <ul className='flex flex-row justify-end w-2/3'>
        <li className='mr-12'>
          <Badge placement="top-start" content="12" color="green">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" /></svg>
          </Badge>
        </li>
        <li>
          Hello, James
        </li>
      </ul>
    </nav>
  )
}

export default Header;