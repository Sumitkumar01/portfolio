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



function Skills() {




    const skills = [
        { imgurl: <ImHtmlFive />, title: "html" },
        { imgurl: <DiCss3 />, title: "css" },
        { imgurl: <TbBrandJavascript />, title: "Javascript" },
        { imgurl: <BsFiletypeScss />, title: "scss" },
        { imgurl: <BiLogoTypescript />, title: "Typescript" },
        { imgurl: <SiTailwindcss />, title: "Tailwindcss" },
        { imgurl: <SiBootstrap />, title: "Bootstrap" },
        { imgurl: <RiReactjsLine />, title: "Reactjs" },
        { imgurl: <TbBrandNextjs />, title: "Nextjs" },
        { imgurl: <LiaNode />, title: "Nodejs" },
        { imgurl: <SiExpress />, title: "Expressjs" },
        { imgurl: <SiMongodb />, title: "Mongodb" },
        { imgurl: <FaGitAlt />, title: "Git" },
    ]
    const kskill = ["Proficient in HTML5, CSS3, and JavaScript ES6+", "Expertise in modern frontend frameworks and libraries such as React.js, Tailwind Css and Redux Toolkit", "Experience with responsive design and mobile-first development", "Strong understanding of web accessibility standards and SEO best practices", "Familiarity with version control systems like Git"]
    return (
        <section className='pb-4 pt-20 dark:bg-gray-900 bg-[#f6efef]' id='skills'>
            <div className='max-w-6xl mx-auto px-4'>
                <div className='lg:grid lg:grid-cols-5 items-center justify-center'>
                    <div className='col-span-1'>
                        <h2 className='md:text-3xl text-2xl font-bold dark:text-[#70a0d0] text-[#2F4F4F]'>Skills Acquired</h2>

                    </div>
                    <div className='col-span-4 p-2'>
                        <div className='bg-[#70a0d0] w-full h-[1.5px]' />
                    </div>
                </div>
                <div className='flex flex-wrap items-center justify-center md:gap-20 gap-4 md:p-8 p-2'>
                    {skills.map((skill, i) => (
                        <div className='flex flex-col items-center justify-center gap-2' key={i}>
                            <div  className='p-5 rounded-lg flex items-center justify-center dark:bg-gray-800 text-4xl bg-[#70a0d0] text-white'>
                                {skill.imgurl}
                            </div>
                            <div>
                                <p className='capitalize text-sm'>{skill.title}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='mt-3'>
                    <div className='lg:grid lg:grid-cols-6 items-center justify-center'>
                        <div className='col-span-1'>
                            <h2 className='md:text-3xl text-2xl font-bold dark:text-[#70a0d0] text-[#2F4F4F]'>Key Skills</h2>

                        </div>
                        <div className='col-span-5 md:p-2'>
                            <div className='bg-[#70a0d0] w-full h-[1.5px]' />
                        </div>
                    </div>
                    <ol className='px-5 py-8 list-decimal'>
                        {kskill.map((item, i) => (
                            <li key={i}>
                                {item}
                            </li>
                        ))}
                    </ol>
                </div>

            </div>
        </section>
    )
}

export default Skills