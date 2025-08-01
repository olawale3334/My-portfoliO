import imag from '/ola.jpeg'
import AOS from "aos";
import { useState,useEffect } from "react"
import "aos/dist/aos.css";

function HomePage() {
     useEffect(() => {
        AOS.init({
          duration: 2000,
          once: true,
        });
      }, []);
  return (
    <>
      <div id='home'>
       <section className="bg-gradient-to-tr from-[#0e1825] via-[#1e2a3a] to-[#2eb2d3] h-screen text-white py-24 md:p-20">
          <div className="md:flex gap-4">
            <div className="px-6 mb-10 leading-7 " data-aos="fade-down" data-aos-delay="500">
              <div className="text-3xl mb-6 font-semibold">
                <p>I'm <span className="text-[#2eb2d3]">developer</span></p>
                <p>Kolawole A Dolapo</p>
              </div>
              <p className="md:w-[33rem] mt-5 text-gray-400">
                I'm a skilled developer who crafts digital solutions that make a difference,
                creating robust web apps and user-friendly interfaces. With expertise in
                HTML, CSS, JavaScript, I bring ideas to life through code.
              </p>
              <div className="mt-5">
                <button className="bg-[#2eb2d3] px-5 py-2">Hire me</button>
              </div>
            </div>

            <div data-aos="fade-down" data-aos-delay="500"   data-aos-duration="1000">
              <img className="rounded-full md:w-[33rem]" src={imag} alt="Profile" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default HomePage;
