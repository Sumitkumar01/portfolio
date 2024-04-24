"use client"

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { IoIosMail } from "react-icons/io";
import { SiLinkedin } from "react-icons/si";
import { FaSquareGithub } from "react-icons/fa6";
import { TiThMenu } from "react-icons/ti";
import { RiCloseLine } from "react-icons/ri";
import { FaArrowCircleUp } from "react-icons/fa";


function NavBar() {

    interface links {
        name: string,
        path: string,
    }
    const links: links[] = [
        { name: "home", path: "#home" },
        { name: "skills", path: "#skills" },
        { name: "project", path: "#project" },
        { name: "contact", path: "#contact" }
    ]

    const social = [
        { icon: <SiLinkedin />, path: "https://www.linkedin.com/in/sumit-kumar-2952a0186/", title: "linkedin" },
        { icon: <FaSquareGithub className='text-2xl' />, path: "https://github.com/Sumitkumar01", title: "github" },
        { icon: <IoIosMail className='text-3xl' />, path: "mailto:sk7627577@gmail.com ", title: "mail" },
    ]
    const [open,close]=useState(false);
    const [navbar, setNavbar] = useState(false);



    const changBg = () => {
        if (window.scrollY >= 9) {
            setNavbar(true);
        } else {
            setNavbar(false)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', changBg)
    })

    const click = () =>{
        window.scrollTo(0, 0);
    }


    return (
        <header>
            <div className="scroll-watcher"></div>
            <div className={`fixed w-full z-10 pt-1 duration-300 ${navbar ? 'navbar active' : "navbar"}`}>
                <nav className='max-w-6xl mx-auto px-4 w-full'>
                    <div className='flex items-center justify-between gap-4 py-3'>
                        <Link href={"#home"} className='text-2xl dark:bg-gray-700  rounded-full font-semibold font-serif capitalize p-2 border-2 border-pink-600 flex items-center justify-center'>
                            sk
                        </Link>
                        <ul className='lg:flex hidden items-center justify-center gap-5 '>
                            {links.map((item: links, i) => (
                                <li key={i}>
                                    <Link className="text-xl font-medium uppercase hover:border-b-2 border-indigo-600 duration-200 nav_item  p-2" href={item.path}>{item.name}</Link>
                                </li>
                            ))}
                        </ul>
                        <ul className='lg:flex hidden items-center justify-between gap-4'>
                            {social.map((item, i: number) => (
                                <li key={i}>
                                    <Link href={item.path} target='_blank' className='text-xl hover:text-indigo-500 social_icon duration-200'>
                                        <span className='sr-only'>{item.title}</span>
                                        {item.icon}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <button className='lg:hidden block p-2' onClick={()=> close(!open)}>
                            <span className='sr-only'>menu_open</span>
                            <TiThMenu className='text-3xl' />
                        </button>
                    </div>
                </nav>

            </div>
            {/* mobile nav */}
            {open && <nav className='w-full h-full py-5 bg-blue-200 dark:bg-slate-700 fixed z-10 lg:hidden'>
                <button className='p-2' onClick={()=> close(!open)}>
                    <span className="sr-only">menu_close</span>
                    <RiCloseLine className='text-3xl'/>
                </button>
                <ul className='lg:hidden flex flex-col items-center justify-center gap-5 '>
                    {links.map((item: links, i) => (
                        <li key={i} onClick={()=> close(!open)} >
                            <Link className="text-xl font-medium uppercase active:text-indigo-700 p-2" href={item.path}>{item.name}</Link>
                        </li>
                    ))}
                </ul>
            </nav>}
            <div className={`w-[3rem] h-[3rem] rounded-full fixed flex z-50 justify-center  items-center text-4xl duration-500  bottom-4 bg-[#70a0d0] ${navbar?"right-4":"-right-20"}`}>
            <button onClick={click}>
                <FaArrowCircleUp />
                {/* <span>Scroll to top</span> */}
            </button>
        </div>
        </header>
    )
}

export default NavBar