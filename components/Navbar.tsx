import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useContext, useEffect, useState } from 'react';

import images from '../assets';
import Button from './Button';

const MENU_ITEMS = [
  {
    label: 'Explore NFTs',
    value: '/',
  },
  {
    label: 'Listed NFTs',
    value: '/created-nfts',
  },
  {
    label: 'My NFTs',
    value: '/my-nfts',
  },
];

const ButtonGroup = ({ setActiveMenuItem, router }) => {
  const hasConnected = true;

  return hasConnected ? (
    <Button
      classStyles="mx-2 rounded-xl"
      btnName="Create"
      handleClick={() => {
        setActiveMenuItem('');
        router.push('/create-nft');
      }}
    />
  ) : (
    <Button
      classStyles="mx-2 rounded-xl"
      btnName="Connect"
      handleClick={() => {}}
    />
  );
};

const MenuItems = ({ isMobile, activeMenuItem, setActiveMenuItem }) => {
  return (
    <ul
      className={`list-none flexCenter flex-row ${
        isMobile && 'flex-col h-full'
      }`}
    >
      {MENU_ITEMS.map((item, i) => (
        <li
          key={i}
          onClick={() => {
            setActiveMenuItem(item);
          }}
          className={`flex flex-row items-center font-poppins font-semibold text-base dark:hover:text-white hover:text-nft-dark mx-3 ${
            activeMenuItem.value === item.value
              ? 'dark:text-white text-nft-black-1'
              : 'dark:text-nft-gray-3 text-nft-gray-2'
          }`}
        >
          <Link href={item.value}>{item.label}</Link>
        </li>
      ))}
    </ul>
  );
};

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const router = useRouter();
  const [activeMenuItem, setActiveMenuItem] = useState(
    MENU_ITEMS.find((item) => item.value === router.pathname) || MENU_ITEMS[0]
  );
  const [isOpen, setIsOpen] = useState(false);

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
        <div className="md:hidden flex">
          <MenuItems
            activeMenuItem={activeMenuItem}
            setActiveMenuItem={setActiveMenuItem}
          />
          <div className="ml-4">
            <ButtonGroup
              setActiveMenuItem={setActiveMenuItem}
              router={router}
            />
          </div>
        </div>
      </div>

      <div className="hidden md:flex ml-2">
        {isOpen ? (
          <Image
            src={images.cross}
            width={20}
            height={20}
            alt="close"
            onClick={() => setIsOpen(false)}
            className={theme === 'light' ? 'filter invert' : ''}
          />
        ) : (
          <Image
            src={images.menu}
            width={25}
            height={25}
            alt="menu"
            onClick={() => setIsOpen(true)}
            className={theme === 'light' ? 'filter invert' : ''}
          />
        )}
      </div>
      {isOpen && (
        <div className="fixed inset-0 top-65 dark:bg-nft-dark bg-white z-10 nav-h flex justify-between flex-col">
          <div className="flex-1 p-4">
            <MenuItems
              activeMenuItem={activeMenuItem}
              setActiveMenuItem={setActiveMenuItem}
              isMobile
            />
          </div>
          <div className="p-4 border-t dark:border-nft-black-1 border-nft-gray-1">
            <ButtonGroup
              setActiveMenuItem={setActiveMenuItem}
              router={router}
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
