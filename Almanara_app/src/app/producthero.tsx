"use client";

import Image from "next/image";
import { Typography } from "@material-tailwind/react";

function Producthero() {
    return (
        <>
            <header className="bg-white p-8">
                <div className="container mx-auto text-center">
                    <Typography
                        color="blue-gray"
                        className="font-custom text-customBlue mx-auto w-full text-[30px] lg:text-[48px] font-bold leading-[45px] lg:leading-[60px] lg:max-w-2xl"
                    >
                        Pick a theme,<br/>
                        <span className="text-customRed"> Experience the power of AL MANARA.</span>
                    </Typography>
                    <Typography
                        variant="lead"
                        className="font-custom mx-auto text-lg mt-4 mb-10 w-full px-8 text-gray-700 lg:w-10/12 lg:px-12 xl:w-8/12 xl:px-20"
                    >
                        AI-Driven Equity in Moroccan Education.
                    </Typography>
                </div>
            </header>
        </>
    );
}

export default Producthero;
