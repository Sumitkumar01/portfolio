'use client'

import React from 'react'
import { FaArrowCircleUp } from "react-icons/fa";


function ScrollToTop() {

    const click = () =>{
        window.scrollTo(0, 0);
    }

    return (
        <div className=' w-[3rem] h-[3rem] rounded-full fixed flex justify-center  items-center text-4xl  bottom-4 right-4  bg-[#70a0d0]'>
            <button onClick={click}>
                <FaArrowCircleUp />
                {/* <span>Scroll to top</span> */}
            </button>
        </div>
    )
}

export default ScrollToTop