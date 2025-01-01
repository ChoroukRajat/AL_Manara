"use client";

import Image from "next/image";
import { Typography } from "@material-tailwind/react";

function Heroteam() {
  const profiles = [
    {
      name: "RAJAT Chorouk",
      profession: "Software Engineer",
      email: "rajatchorouk@gmail.com",
      imageUrl: "/../../image/custom/chorouk.png",
    },
    {
      name: "ELHAIMER Salma",
      profession: "Data Scientist",
      email: "elhaimersalma2023@gmail.com",
      imageUrl: "/../../image/custom/salma.png",
    },
    {
      name: "LAMGARI Asmae",
      profession: "Data Engineer",
      email: "asmaelamgarim@gmail.com",
      imageUrl: "/../../image/custom/asmaa.png",
    },
    {
      name: "DOUKHOU Hajar",
      profession: "AI Engineer",
      email: "hajardoukhou7@gmail.com",
      imageUrl: "/../../image/custom/hajar.png",
    },
  ];

  return (
      <>
        {/* Header Section */}
        <header className="bg-white p-8">
          <div className="container mx-auto text-center">
            <Typography
                color="blue-gray"
                className="font-custom text-customBlue mx-auto w-full text-[30px] lg:text-[48px] font-bold leading-[45px] lg:leading-[60px] lg:max-w-2xl"
            >
              Our team, <br />
              <span className="text-customRed"> Our strength.</span>
            </Typography>
            <Typography
                variant="lead"
                className="font-custom mx-auto text-lg mt-4 mb-10 w-full px-8 text-gray-700 lg:w-10/12 lg:px-12 xl:w-8/12 xl:px-20"
            >
              Meet the talented team who made all this happen.
            </Typography>
          </div>
        </header>

        {/* Team Section */}
        <div className="flex items-center justify-center bg-gradient-to-r from-white via-white to-gray-100 py-12">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 mx-auto max-w-5xl">
            {profiles.map((profile, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="relative w-36 h-36 rounded-full shadow-lg border-4 border-gray-200 overflow-hidden">
                    <Image
                        src={profile.imageUrl}
                        alt={profile.name}
                        layout="fill"
                        objectFit="cover"
                    />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-gray-800">
                    {profile.name}
                  </h3>
                  <p className="text-sm text-gray-600">{profile.profession}</p>
                  <a
                      href={`mailto:${profile.email}`}
                      className="text-blue-500 text-sm hover:underline mt-1"
                  >
                    {profile.email}
                  </a>
                </div>
            ))}
          </div>
        </div>
      </>
  );
}

export default Heroteam;
