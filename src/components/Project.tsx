import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGitAlt } from "react-icons/fa";
import { FaLink } from "react-icons/fa";

function Project() {
    interface projects {
        id: number;
        imgUrl: string;
        title: string;
        description: string;
        link: string;
        gitLink: string;
    }

    const projects: projects[] = [
        {
            id: 1,
            imgUrl: "/project/awadh_vilas.png",
            title:
                "It's a <b>hotel</b> website <br/> Where you see all the detils about hotel and book room online.",
            description:
                "Tools: <br/> <b>SCSS</b>, <b>React</b>, <b>Tailwindcss</b>, <b>Swiper js</b> <br/> <b>Swiper js</b> is use for sliding animation",
            link: "https://hotelawadhvilasayodhya.com/",
            gitLink: "",
        },
        {
            id: 2,
            imgUrl: "/project/azooz.png",
            title: "It's a <b>Mail delivery company</b>",
            description:
                "Tools: <br/> <b>SCSS</b>, <b>React</b>, <b>Bootstrap</b>, <b>Swiper js</b> <br/> <b>Swiper js</b> is use for sliding animation",
            link: "https://azoozexpress.vercel.app/",
            gitLink: "",
        },
        {
            id: 3,
            imgUrl: "/project/music.png",
            title:
                "It's a <b>Music School</b> website  <br/> Where you see all the detils about music school and demo  website.",
            description:
                "Tools: <br/><b>Next Js</b>, <b>Tailwindcss</b>, <b>Aceternity ui</b> <br/> <b>Aceternity ui</b> is use for animation",
            link: "https://crescendo-academy.vercel.app/",
            gitLink: "https://github.com/Sumitkumar01/music-school-web",
        },
        {
            id: 4,
            imgUrl: "/project/crypto.png",
            title:
                "In this Crypto currency website <br/> where you see all the detils about current market price crypto coin and exchange value",
            description:
                "Tools:<br/><b>React js</b>,<b>axios</b>,<b>chakra-ui</b>,<br/> axios is use for fetching data from api  & chakra-ui is use for styling and animation",
            link: "https://crypto-app-three-tawny.vercel.app/",
            gitLink: "https://github.com/Sumitkumar01/crypto-app",
        },
        {
            id: 5,
            imgUrl: "/project/tindog.png",
            title: "It's a demo Landing page build during learn time",
            description: "Tools: <br/> <b>HTML</b>, <b>CSS</b>, <b>Bootstrap</b>",
            link: "https://sumitkumar01.github.io/Tin_dog/",
            gitLink: "https://github.com/Sumitkumar01/Tin_dog",
        },
    ];
    return (
        <section id="project" className="pt-20 dark:bg-slate-400/20 ">
            <div className="max-w-6xl mx-auto px-4">
                <div className="lg:grid lg:grid-cols-5 items-center justify-center">
                    <h2 className="md:text-4xl text-2xl capitalize font-bold dark:text-[#70a0d0] text-[#2F4F4F]">
                        my Projects
                    </h2>
                    <div className="col-span-4 md:ps-1">
                        <div className="bg-[#70a0d0] w-full h-[1.5px]" />
                    </div>
                </div>
                <div className="w-full py-8">
                    {projects.map((item: projects, index) => (
                        <div
                            key={item.id}
                            className={`lg:flex items-center mb-6 border shadow-2xl  dark:border-white/70 border-gray-500 rounded-lg overflow-hidden justify-between gap-5 w-full ${index % 2 !== 0 ? "lg:flex-row-reverse" : ""
                                }`}
                        >
                            <div className="w-full animate-card">
                                <Image
                                    src={item.imgUrl}
                                    alt="alt"
                                    width={550}
                                    height={500}
                                    priority
                                    className="bg-red-600 w-full"
                                />
                                <div className={`links text-black text-3xl flex justify-between items-start ${item.gitLink?"w-[200px]":"w-max"}`}>
                                    {item.gitLink ? <Link href={item.gitLink} target="_blank" className="hover:text-blue-400">
                                        <span className="text-sm -mt-2">code link</span>
                                        <FaGitAlt />
                                    </Link> : null}
                                    <Link href={item.link} target="_blank" className="hover:text-blue-400">
                                        <span className="text-sm -mt-4">Live url</span>
                                        <FaLink />
                                    </Link>
                                </div>
                            </div>
                            <div className="w-full p-3">
                                <div>
                                    <h3 dangerouslySetInnerHTML={{ __html: item.title }}></h3>
                                </div>
                                <div>
                                    <p dangerouslySetInnerHTML={{ __html: item.description }}></p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Project;
