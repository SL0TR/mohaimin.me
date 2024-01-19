import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { FiDownload } from "react-icons/fi";
import { IoIosArrowForward } from "react-icons/io";
import Greeting from "./Greeting";

export default function HeroIntro() {
  return (
    <div className="flex flex-col justify-center items-center xl:items-start">
      <Greeting />
      <h1 className="text-6xl font-bold my-2">Mohaimin</h1>
      <div className="flex xl:justify-start justify-center items-center">
        <IoIosArrowForward className="mr-2 text-indigo-400 xl:text-3xl text-xl" />
        <h2 className="xl:text-3xl text-xl	 text-indigo-400 ">
          A Full Stack Developer
        </h2>
      </div>
      <div className="mt-10 flex items-center">
        <Link href={process.env.RESUME_DOWNLOAD_LINK || ""} download>
          <Button>
            <FiDownload className="mr-2 h-4 w-4" /> My Resume
          </Button>
        </Link>
        <Link href="/about">
          <Button className="ml-6" variant="link">
            About Me
          </Button>
        </Link>
      </div>
    </div>
  );
}