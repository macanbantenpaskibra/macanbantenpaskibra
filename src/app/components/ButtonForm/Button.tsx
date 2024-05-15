'use client'
import { useRouter } from 'next/navigation';
import React from 'react';

const Button = () => {
  const router = useRouter();
  return (
    <button className=" border px-5 py-1 rounded-2xl border-white/25 text-green-new font-montserrat font-bold text-sm bg-gradient-to-r from-green-new to-black text-transparent bg-clip-text" 
    onClick={()=>{router.push('/Form')}}>FORM</button>
  );
};

export default Button;