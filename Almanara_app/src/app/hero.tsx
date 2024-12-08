"use client";

import Image from "next/image";
import { Button, Typography, Input } from "@material-tailwind/react";


function Hero() {
  return (
    <header className="mt-5 bg-white p-8">
    <div className="w-w-full container mx-auto pt-12 pb-24 text-center">
      <Typography
        color="blue-gray"
        className="font-custom text-customBlue mx-auto w-full text-[30px] lg:text-[48px] font-bold leading-[45px] lg:leading-[60px] lg:max-w-2xl"
      >
        AI-Driven Equity in Moroccan Education
      </Typography>
      <Typography
        variant="lead"
        className="font-custom mx-auto mt-8 mb-4 w-full px-8 !text-gray-700 lg:w-10/12 lg:px-12 xl:w-8/12 xl:px-20"
      >
        We address regional gaps and challenges with LLM-Powered policy recommendations.
      </Typography>
      <div className="grid place-items-start justify-center gap-2">
        <div className="mt-8 flex flex-col items-center justify-center gap-4 md:flex-row">
          <div className="w-80">
            {/* @ts-ignore */}
            <Input label="example@eduvision.com" />
          </div>
          <Button size="md" className="font-custom lg:w-max bg-customBlue text-white shrink-0 hover:bg-customRed" fullWidth >
            get started
          </Button>
        </div>
      </div>
    </div>
    <div className="w-full flex justify-center">
      <Image
        width={1030}
        height={435}
        src="/image/custom/ban.png"
        alt="credit cards"
        className="rounded-lg object-cover shadow-[5px_5px_15px_0px_rgba(0,0,0,0.2)]"
      />
    </div>
  </header>
  );
}
export default Hero;
