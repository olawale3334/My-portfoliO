import { useState,useEffect } from "react"
import reactIcon from '/react.svg'
import AOS from "aos";
import "aos/dist/aos.css";

function Expertise() {

    useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    });
  }, []);

    
    const [skills] = useState([
    { title: "HTML", image:"a", description: "Semantic, accessible markup" },
    { title: "CSS", image: 'a', description: "Responsive design, animations" },
    { title: "JavaScript", image: 'a', description: "ES6+, DOM, async logic" },
    { title: "React", image: reactIcon, description: "Components, hooks, JSX" },
    { title: "Tailwind CSS", image: "tailwindIcon", description: "Utility-first styling" },
    { title: "UI/UX", image: "uiIcon", description: "Clean, user-focused interfaces" },])

   
    return(
        <>
        <div className="">
             <section id="services" className="bg-[#0e1825] overflow-hidden px-6 text-white">
      <div class="py-20">
        <div className="mb-5">
           <h1 class="font-bold text-3xl">my <span class="text-[#2eb2d3] ">Skills</span></h1>
           <p class="md:w-[40rem] mt-5 text-gray-400"> A skilled web  developer  with a passion for creating innovative digital solutions. With expertise in HTML, CSS, JavaScript, React and Tailwindcss. I'm currently building my portfolio and looking for new opportunities to showcase my skills and work with clients.</p>
        </div>
        <div className=" grid grid-cols-1 md:-grid-cols-3 lg:grid-cols-3 gap-6 mt-10  overflow-visible">
            {skills.map((skill,i) =>(
                <div key={i} className="bg-[#1a1f2e] md:w-[23rem]   p-6 rounded-2xl shadow-lg border border-cyan-500 transition transform hover:-translate-y-2 hover:scale-105 hover:border-cyan-200 duration-300"   
             data-aos={i % 2 === 0 ? "fade-right" : "fade-left"}
              data-aos-delay={i * 150} >
            <div className="flex items-center justify-center mb-4">
              <img
                src={skill.image}
                alt=""
                className="w-16 h-16 object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold text-center mb-2">{skill.title}</h3>
            <p className="text-gray-400 text-sm text-center">{skill.description}</p>
          </div>
            ))}
        </div>
      </div>
    </section>
        </div>
        </>
    )
}
export default  Expertise