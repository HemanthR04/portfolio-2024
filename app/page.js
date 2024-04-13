import AboutMe from "@/components/AboutMe";
import ConrtactMe from "@/components/ConrtactMe";
import CustomerStories from "@/components/CustomerStories";
import FeaturedWork from "@/components/FeaturedWork";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import Skills from "@/components/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="bg-primary w-full h-screen font-GeneralSans"> 
      <NavBar/>
      <Hero/>
      <Skills/>
      <FeaturedWork/>
      <AboutMe/>
      <CustomerStories/>
      <ConrtactMe/>
    </div>
    </>
  );
}
