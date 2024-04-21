import { Banner, Contact, Project, Skills } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Banner />
      <Skills />
      <Project />
      <Contact />
    </main>
  );
}
