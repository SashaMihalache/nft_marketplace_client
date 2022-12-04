import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useContext, useEffect, useState } from 'react';

import images from '../assets';

console.log(images.logo02);

const Navbar = () => {
  const { theme, setTheme } = useTheme();

  return (
    <nav className="flexBetween w-full fixed z-10 p-4 flex-row border-b dark:bg-nft-dark bg-white dark:border-nft-black-1 border-nft-gray-1">
      <div className="flex flex-1 flex-row justify-start">
        <Link href="/">
          <div
            className="flexCenter md:hidden cursor-pointer"
            onClick={() => {}}
          >
            <Image src={images.logo02} width={32} height={32} alt="logo" />
            <p className="dark:text-white text-nft-black-1 font-semibold text-lg ml-2">
              CryptoKet
            </p>
          </div>
        </Link>
        <Link href="/">
          <div className="hidden md:flex cursor-pointer" onClick={() => {}}>
            <Image src={images.logo02} width={32} height={32} alt="logo" />
          </div>
        </Link>
      </div>
      <div className="flex flex-initial flex-row justify-end">
        <div className="flex items-center mr-2">
          <input
            type="checkbox"
            className="checkbox"
            id="checkbox"
            onChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          />
          <label
            htmlFor="checkbox"
            className="flexBetween bg-black w-8 h-4 rounded-2xl p-1 relative label"
          >
            <i className="fas fa-sun" />
            <i className="fas fa-moon" />
            <div className="w-3 h-3 absolute bg-white rounded-full ball" />
          </label>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
