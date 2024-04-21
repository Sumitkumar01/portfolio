import Image from 'next/image'
import React from 'react'
import { SiMongodb } from "react-icons/si";
import { LiaNode } from "react-icons/lia";
import { RiReactjsLine } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { BsFiletypeScss } from "react-icons/bs";
import { ImHtmlFive } from "react-icons/im";
import { TbBrandJavascript } from "react-icons/tb";
import { DiCss3 } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";
import { SiBootstrap } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { FaGitAlt } from "react-icons/fa";



function Banner() {

  const skills = [
    { url: <TbBrandJavascript />, title: "Javascript" },
    { url: <BsFiletypeScss />, title: "scss" },
    { url: <SiTailwindcss />, title: "Tailwindcss" },
    { url: <RiReactjsLine />, title: "Reactjs" },
    { url: <TbBrandNextjs />, title: "Nextjs" },
    { url: <LiaNode />, title: "Nodejs" },
    { url: <SiExpress />, title: "Expressjs" },
    { url: <SiMongodb />, title: "Mongodb" },
  ]
  return (
    <section id='#home' className='dark:bg-[#222222] bg-[#B0C4DE] dark:text-[#B4B4B4] text-[#2F4F4F]'>
      <div className='max-w-6xl mx-auto px-4 pb-4'>
        <div className='w-full h-full pt-16 lg:grid lg:grid-cols-2 gap-5 items-center justify-center'>
          <div className='flex flex-col md:items-start  items-center  gap-3 py-7'>
            <p className='text-base md:text-xl font-normal'>Hi, my name is</p>
            <h1 className='capitalize md:text-5xl text-3xl font-bold'>sumit kumar</h1>
            <p className='text-base md:text-xl font-normal md:text-left text-center'>I have built many industry grade projects from scratch and am armed with many technological skills useful for tech projects. Check out my projects below .:</p>
          </div>
          <div className='grid place-content-center md:h-[90vh]'>
            <div className='orbit'>
              <ul>
                {skills.map((skill, i: number) => (
                  <li key={i}>
                    <div className='text-4xl'>
                      {skill.url}
                    </div>
                    <p>{skill.title}</p>
                  </li>
                ))}
              </ul>
              <div className="center-img">
                <Image src="/hero.jpg" alt="alt" width={200} height={200} className='rounded-xl' priority />
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner