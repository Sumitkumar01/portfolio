"use client"
import Link from "next/link";
import React from "react";
import { FaPaperPlane } from "react-icons/fa";

function Contact() {


    return (
        <section id="contact" className="py-8 dark:bg-gray-900">
            <div className="lg:flex justify-center items-center max-w-6xl px-4 mx-auto mb-5">
             
                <div className='bg-[#70a0d0] h-[1.5px] lg:w-[40%] lg:mt-0 mt-2 md:block hidden' />
                <h2 className="md:text-3xl text-xl lg:w-[20%] px-1 font-bold text-center uppercase dark:text-[#70a0d0] text-[#2F4F4F]">Contact us</h2>
                
                <div className='bg-[#70a0d0] h-[1.5px] lg:w-[40%] lg:mt-0 mt-2' />
            </div>
            <div className="lg:grid lg:grid-cols-2 items-center gap-5 max-w-6xl mx-auto px-4">
                <div className="flex flex-col gap-3 md:items-start  items-center">
                    <h3 className="md:text-2xl text-base font-semibold tracking-wide capitalize dark:text-[#70a0d0] text-[#2F4F4F]">Lets connect together!</h3>
                    <div className="">
                        <ul className="flex flex-col gap-2 md:items-start  items-cente">
                            <li className="">
                                Gmail:{" "}
                                <Link href={"mailto:sk762577@gmail.com"}>
                                    sk7627577@gmail.com
                                </Link>
                            </li>
                            <li>Phone: +91 8820445101</li>
                        </ul>
                    </div>

                    <p className="md:text-justify text-center py-3">
                        &#34;Connecting with fellow developers, designers, and tech
                        enthusiasts is a passion of mine. Don&apos;t hesitate to reach
                        out—I&apos;m always eager to collaborate and build something
                        extraordinary together!&#34;
                    </p>

                </div>
                <div className="border p-3 rounded-lg bg-slate-100 dark:bg-transparent">
                    <form>
                        <div className="flex flex-col gap-3">
                            <label htmlFor="name" className="capitalize mb-0">Name*</label>
                            <input
                                type="text"
                                className="mb-2 w-full p-2 rounded-md text-black outline-none "
                                id="name"
                            />
                        </div>
                        <div className="flex flex-col gap-3">
                            <label htmlFor="email" className="capitalize mb-0">email*</label>
                            <input
                                type="email"
                                className="mb-2 w-full p-2 rounded-md text-black outline-none "
                                id="email"
                            />
                        </div>
                        <div className="flex flex-col gap-3">
                            <label htmlFor="msg" className="capitalize mb-0">message*</label>
                            <textarea
                                className="w-full p-2 rounded-md text-black outline-none"
                                id="msg"
                                rows={5}
                            ></textarea>
                        </div>
                        <div className="w-full py-3 text-end">
                            <button type="submit" onClick={(e) => e.preventDefault()} className="px-12 py-3 border bg-[#f9bfca] dark:bg-[#70a0d0] rounded-xl shadow-lg active:scale-95">
                                <span className="sr-only">message</span>
                                <FaPaperPlane />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;
