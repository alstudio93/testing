import React from 'react';
import { useTheme } from 'next-themes';
import {HiOutlineSun} from 'react-icons/hi';
import {MdOutlineDarkMode} from 'react-icons/md';

const ThemeSwitcher = () => {

    const {resolvedTheme, setTheme} = useTheme();
  return (
    <button 
        type="button"
        onClick={()=> setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
       Toggle Dark Mode
    </button>
  )
}

export default ThemeSwitcher