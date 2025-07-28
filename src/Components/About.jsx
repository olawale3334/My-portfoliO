import {useEffect} from 'react';
import ola2 from '/ola2.jpeg'
import AOS from "aos";
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";


const About = () => {
  useEffect(()=>{
    AOS.init ({
        duration:1000,
        once: true
    })
  })
  return (
    <div id='about' className="bg-[#0e1825] text-white py-16 px-6 md:px-20   md:flex justify-center gap-10 items-center">
        <div className='' data-aos='fade-down'>
            <img className='rounded-full md:w-[17rem] mb-3  ' src={ola2} alt="" />
        </div>
      <div className="max-w-3xl mt-6" >
        <h2 className="text-4xl font-bold mb-6 border-l-4 border-[#2eb2d3] pl-4">
          About Me
        </h2>
        <p className="text-lg leading-relaxed text-gray-300">
          Hi, I’m <span className="text-[#2eb2d3] font-semibold">Olawale</span>, a passionate Frontend Developer with  1 year experience in <span className="font-semibold">React, JavaScript, and Tailwind CSS</span>. I enjoy turning complex ideas into beautiful, functional web applications.
        </p>
        <p className="text-lg leading-relaxed text-gray-300 mt-4">
          I'm constantly learning new tools and technologies to improve my skills. I love clean design, efficient code, and creating user-friendly interfaces. Whether it's a full website or a small UI component, I build with purpose and precision.
        </p>
        <p className="text-lg leading-relaxed text-gray-300 mt-4">
          When I'm not coding, you’ll find me exploring design inspirations, watching tech videos, or working on personal projects. I'm open to freelance opportunities and collaborations.
        </p>

        <div className="flex gap-6 mt-6 text-2xl text-[#2eb2d3]" data-aos="fade-up">
            <a href="https://wa.me/qr/DVI4YZ7XJCJAC1" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className="hover:text-white transition" />
            </a>
            <a href="https://facebook.com/YOURUSERNAME" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="hover:text-white transition" />
            </a>
            <a href="https://www.instagram.com/heisolawale/profilecard/?igsh=MXBxaTJtYTVvNWIzMQ==" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="hover:text-white transition" />
            </a>
            <a href="https://x.com/olawale3334" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="hover:text-white transition" />
            </a>
        </div>

      </div>
    </div>
  );
};

export default About;
