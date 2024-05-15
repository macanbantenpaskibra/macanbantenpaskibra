'use client'

import { useRouter } from 'next/navigation';

import { Button } from "@nextui-org/react";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";


const NavTop = () => {
    const router = useRouter();
    return (

             <div className=" text-white">
      <div className=" container">
        <div className=" flex flex-wrap  ">
          <div className=" left-0 right-0 mx-auto border-b-1 font-montserrat font-bold border-white w-full ">
            <h1 className=" text-center">Galeri</h1>
            <h1 className=" text-center text-green-new ">
              Paskibra Macan Banten
            </h1>
          </div>
          <div className="  py-4 flex text-center justify-center font-montserrat font-bold text-sm border-b-1 border-white w-full ">
            <Swiper slidesPerView={3} spaceBetween={-60} className="mySwiper">
              <SwiperSlide>
                <Button
                  onClick={()=>{router.push('/Tahun22')}}
                  size="sm"
                  radius="full"
                  className=" font-extrabold bg-gradient-to-tl from-green-new to-yellow-400"
                >
                  Angkatan 2022
                </Button>
              </SwiperSlide>
              <SwiperSlide>
                <Button
                  size="sm"
                  radius="full"
                  className=" text-transparent bg-clip-text font-extrabold bg-gradient-to-tl from-green-new to-yellow-400"
                >
                  Angkatan 2023
                </Button>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <Button
                  size="sm"
                  radius="full"
                  className=" text-transparent bg-clip-text font-extrabold bg-gradient-to-tl from-green-new to-yellow-400"
                >
                  Angkatan 2024
                </Button>
              </SwiperSlide>
              <SwiperSlide>
                <Button
                  size="sm"
                  radius="full"
                  className=" text-transparent bg-clip-text font-extrabold bg-gradient-to-tl from-green-new to-yellow-400"
                >
                  Coming Soon
                </Button>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>

    )
}

export default NavTop