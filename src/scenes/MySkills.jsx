import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import React, { useState } from "react";
import ColorStyles from "../hooks/ColorStyles";

const MySkills = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  const [firstHovered, setFirstHovered] = useState(false);
  const [secondHoverd, setSecondHovered] = useState(false);
  const { textColorAccent,  } = ColorStyles();

  
  return (
    
    <section id="skills" className="pt-2 pb-1 ">
      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex md:justify-between mt-10  ">
        <motion.div
          className="md:w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
        {isAboveLarge ? (
          <div className=" mx-32 "> 
          <div className="flex flex-col items-center"> 
          <p className="tracking-wider font-oswald font-semibold text-4xl mt-10 mb-10">SKILL  
          <span className={`${textColorAccent}`}> LIBRARY</span>
          </p>
          </div>
          {/* text stactic and flying in on hover  */}

        <div className="flex flex-wrap w-full relative ">
          {/* Book shelfs to the left  animate seperat?*/}
          <div
        className="relative w-2/3 max-w-[200px] md:max-w-[350px] flex float-left"
        onMouseEnter={() => setFirstHovered(true)}
        onMouseLeave={() => setFirstHovered(false)}
      >
        <img
          alt="first book shelf"
          className="relative transition-opacity duration-200"
          src="assets/black-first-transparent.png"
        />
        <img
          alt="yellow book shelf"
          className={`absolute opacity-0 transition-opacity duration-200  ${
            firstHovered ? 'opacity-100' : ''
          }`}
          src="assets/yellow-transparent.png"
        />
      </div>
      <div className={`text-center flex flex-col absolute w-2/3 transition-opacity duration-600  left-96 top-24 text-2xl ${firstHovered || secondHoverd ? "opacity-0": "opacity-100"}`}>
            <p className={`mb-10 font-bold ${textColorAccent} `}>Hover the book shelfs to find out more...</p>
          <p >From pure curiosity in the world,<span className="font-bold text-3xl"> how</span>  and <span className="font-bold text-3xl"> why</span> things are working like they do, I found creative freedom and passion in what I do. </p>  
        </div>
      <div
        className={`text-2xl absolute mt-20  text-right right-44 opacity-0 transition-opacity duration-200 ${
          firstHovered ? 'opacity-100' : ''
        }`}
      >
        <p className={`text-yellow-500 font-bold  underline underline-offset-2`} >Front-End</p>
       
        <p>JavaScript</p>
        <p>React</p>
        <p>HTML</p>
        <p>CSS</p>
        <p>jQuery</p>
      </div>
    </div>
    <div className="flex flex-wrap w-full relative">
          {/* Book shelfs to the left  animate seperat?*/}
          <div
        className="relative w-2/3 max-w-[200px] md:max-w-[350px] flex float-left "
        onMouseEnter={() => setSecondHovered(true)}
        onMouseLeave={() => setSecondHovered(false)}
      >
        <img
                alt="second book shelf"
                className="relative transition-opacity duration-200"
                src="assets/black-second-transparent.png"
                />
            <img
          alt="blue book shelf"
          className={`absolute opacity-0 transition-opacity duration-200 ${
            secondHoverd ? 'opacity-100' : ''
          }`}
          src="assets/blue-second-transparent.png"
        />
      </div>

      <div
        className={`text-2xl absolute  text-right  right-44 opacity-0 transition-opacity duration-200 ${
          secondHoverd ? 'opacity-100' : ''
        }`}
      >
            <p className={`text-blue-500  font-bold  underline underline-offset-2`}>Back-End</p>
            <p> Node.js</p>
            <p> Express</p>
            <p> MongoDB</p> 
          </div>
        </div>  
        </div>
        ):(
          <div className="flex flex-col items-center relative"> 
          <p className="tracking-wider font-oswald font-semibold text-4xl mt-10 mb-10">SKILL  
          <span className={`${textColorAccent}`}> LIBRARY</span>
          </p>
          <div className="flex flex-wrap w-full mx-auto text-xl">
          <div className="m-2 mb-10">
          <p>From pure curiosity in the world,<span className="font-bold text-3xl"> how</span>  and <span className="font-bold text-3xl"> why</span> things are working like they do, I found creative freedom and passion in what I do. </p>  
          </div>
  
        <div className="w-1/2 text-center  ">
          <p className={`text-yellow-500 font-bold  underline underline-offset-2`} >Front-End</p>
          <p>JavaScript</p>
          <p>React</p>
          <p>HTML</p>
          <p>CSS</p>
          <p>jQuery</p>
        </div>
        <div className="w-1/2 text-center ">
        <p className={`text-blue-500  font-bold  underline underline-offset-2`}>Back-End</p>
            <p> Node.js</p>
            <p> Express</p>
            <p> MongoDB</p> 
        </div>
   
  
  </div>
  </div>
        )}
        </motion.div>
        
    </div>
 </section>
 )
}
export default MySkills;




