'use client';

import React from 'react';

import Link from 'next/link';

import useNavigation from '../Nav bottom/hook/use-navigation';
import useScrollingEffect from '../Nav bottom/hook/use-scroll';
import { Icon } from '@iconify/react';


const BottomNav = () => {
  const scrollDirection = useScrollingEffect(); // Use the custom hook
  const navClass = scrollDirection === 'up' ? '' : 'opacity-25 duration-500';

  const {
    isHomeActive,
    isGaleriActive,
    isNotificationsActive,
  } = useNavigation();

  return (
    <div
      className={`fixed bottom-0 w-full py-4 z-10 bg-zinc-100 dark:bg-zinc-950/20 rounded-t-2xl backdrop-blur-sm border-t dark:border-zinc-800 border-zinc-200 shadow-green-new shadow-lg sm:hidden ${navClass}`}
    >
      <div className="flex flex-row justify-around items-center bg-transparent w-full">
        <Link href="/" className="flex items-center relative">
          {isHomeActive ? (
            <Icon icon="line-md:home-twotone-alt" style={{color: 'white'}} width="32" height="32" />
          ) : (
            <Icon icon="line-md:home-twotone-alt"  style={{color: 'white'}} width="32" height="32" />
          )}
          {/* <span className="h-2 w-2 rounded-full bg-sky-500 absolute -top-0.5 right-[3px]"></span> */}
        </Link>
        <Link href="/GaleriAngkatan" className="flex items-center">
          {isGaleriActive ? (
           <Icon icon="material-symbols:gallery-thumbnail-outline-sharp"  style={{color: 'white'}} width={32} height={32} />
          ) : (
            <Icon icon="material-symbols:gallery-thumbnail-outline-sharp"  style={{color: 'white'}} width={32} height={32} />
          )}
        </Link>
        <Link href="/messages" className="flex items-center">
        {isNotificationsActive ? (
            <Icon icon="line-md:bell-twotone-alert-loop"  style={{color: 'white'}} width={32} height={32} />
          ) : (
            <Icon icon="line-md:bell-twotone-alert-loop"  style={{color: 'white'}} width={32} height={32} />
          )}
        </Link>
      </div>
    </div>
  );
};

export default BottomNav;