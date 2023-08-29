'use client'
import Image from 'next/image'
import { useState } from 'react';

export default function Home() {
  const [theme, setTheme] = useState('');

  const handleThemeClick = (themePreference) => {
    // Set the theme preference in a cookie
    document.cookie = `userPreference=theme:${themePreference}; path=/`;
    setTheme(themePreference);
  };

  return (
    <>
      <div className='container mx-auto flex space-x-4 mt-5'>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => handleThemeClick('dark')}>Dark</button>
        <button className='bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded' onClick={() => handleThemeClick('light')}>Light</button>
      </div>
    </>
  )
}
