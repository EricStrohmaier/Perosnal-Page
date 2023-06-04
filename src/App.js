import Navbar from "./scenes/Navbar";
import LineGradient from "./components/LineGradient";
import useMediaQuery from "./hooks/useMediaQuery";
import React,{ useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import ColorStyles from "./hooks/ColorStyles";
import AnchorLink from "react-anchor-link-smooth-scroll";
import SocialMediaIcons from "../src/components/SocialMediaIcons";
import Lottie from "lottie-react"
import animationData from "../src/assets/18123-developer.json"
import bnkr  from "./assets/moblie-bnkr.png"
import recipeScraper from "./assets/recipe-scraper.png"
import resume from "./assets/Resume Eric Strohmaier.pdf"


function App() {
  // Initialize all the colors and change them on Click
  const {fromColor,viaAccent,toColor,toBackground,fromBackground, appClass,accent,primary,secondary,boderPrimary,textColorAccent,placeholderText,hoverPrimaryColor, handleChangeTheme} = ColorStyles();

  const [selectedPage, setSelectedPage] = useState("home");
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isDesktop = useMediaQuery("(min-width: 1060px)");
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
 

  const [firstHovered, setFirstHovered] = useState(false);
  const [secondHoverd, setSecondHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage("home");
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  //Laning page
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true)};
  const handleMouseLeave = () => {
    setIsHovered(false)};
// Rotate animation IMG
  const [rotate, setRotate] = useState(false);

  const handleImageClick = () => {
    setRotate(!rotate) };

//DOTs 

const selectedStyles = `relative ${primary} before:absolute before:w-6 before:h-6 before:rounded-full
  before:border-2 ${boderPrimary} before:left-[-50%] before:top-[-50%]`;

  //contact me 
  

  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e) => {
    console.log("~ e", e);
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <div  className={`${appClass} `}>
    
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <div className=" xl:px-32">
      <div className="w-5/6 mx-auto md:h-full ">
        {isDesktop && (
          <div className="flex flex-col gap-6 fixed top-[60%] right-7">
      <AnchorLink
        href="#home"
        className={`${
          selectedPage === "home" ? selectedStyles : `${secondary}`
        } w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage("home")}
      />

      <AnchorLink
        href="#skills"
        className={`${
          selectedPage === "skills" ? selectedStyles : `${secondary}`
        } w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage("skills")}
      />

      <AnchorLink
        href="#projects"
        className={`${
          selectedPage === "projects" ? selectedStyles : `${secondary}`
        } w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage("projects")}
      />

      <AnchorLink
        href="#contact"
        className={`${
          selectedPage === "contact" ? selectedStyles : `${secondary}`
        } w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage("contact")}
      />
    </div>
       
        )}
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("home")}
        >
       
    <section
      id="home"
      className="md:flex md:justify-between md:items-center gap-16 md:h-full py-10"
    >
    <div className="basis-3/5  mt-12 md:mt-20 flex justify-center md:order-2">
    <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.75 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >      
        {/* class is for the form behind the picture */}
        {isAboveLarge ? (
          <div className="relative group mt-5">
          <img
            alt="profile"
            className=" w-full max-w-[200px] md:max-w-[300px] rounded-lg relative z-10 "
            src="assets/profile-image.jpg"
          />
          {/* background blog   make it glowing on hold ? */}
            <div className={`absolute top-0 left-0 w-full h-full scale-110 rounded-lg ${accent} z-0 filter blur-3xl opacity-0 group-hover:opacity-80  duration-500  `}></div>
          </div>
        ) : (
          <img
            alt="profile"
            className="z-10 w-full max-w-[200px] md:max-w-[3000px] rounded-lg "
            src="assets/profile-image.jpg"
          />
        )}
  
</motion.div>    </div>
      {/* MAIN TEXT */}
      <div className="z-30 basis-2/5 mt-12 md:mt-32">
        {/* HEADINGS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
        {/*  Adding animatons name? behind name img? flying background things */}
          <p className="text-6xl font-oswald z-10 text-center md:text-start">
            Eric {""}
            <span
              className="xs:relative xs:text-primary xs:font-semibold z-20 
              before:absolute before:-left-[25px] before:-top-[70px] before:z-[-1]"
            >
              Strohmaier
            </span>
          </p>

          <p className="mt-10 mb-7  text-center md:text-start text-lg">
      
I am a motivated and curious Front End Developer thriving on challenges and am always eager to learn new technologies.
          </p>
        </motion.div>
       

        {/* CALL TO ACTIONS */}
        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
        {/* stlye buttons different  + download cv  */}
        <AnchorLink
        className={`relative  ${primary} z-10  rounded-lg py-3 px-7 font-semibold transition duration-200  hover:-translate-y-1 `} 
        onClick={() => setSelectedPage("contact")}
        href="#contact"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
    > 
    <div
        className={`absolute w-2/3 h-full scale-150 rounded-lg ${primary} z-0 filter blur-lg opacity-0 ${
          isHovered ? 'opacity-80' : ''
        } duration-200`}
      ></div>
      <span className="relative z-10">Contact Me</span>
     
      </AnchorLink>
        <div className="w-3 h-1"></div>
          <a
            className={`rounded-lg  hover:-translate-y-1  transition duration-200 ${secondary} p-0.5 z-10`} 
            href={`${resume}`}
            target="_blank" rel="noreferrer"
          >
            <div className="   w-full h-full flex items-center justify-center px-10 font-oswald">
              Open Resume/CV
            </div>
          </a>
        </motion.div>
   
        <motion.div
          onClick={handleChangeTheme}
          className="flex mt-8 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
        <button className='flex items-center' onClick={handleImageClick } >
          
        <motion.img
       variants ={{
              hidden: { rotate: -360, transition:{duration: 1.5}},
              rotate: { rotate: 360, transition: { duration: 1.5},},}}
                  initial="hidden"
                  animate={rotate ? "rotate": "hidden"}
                  alt="profile"
                  className="spin-image"
                  src="assets/color-wheel.png"
    />
        
       <p className='pl-3 text-xl font-semibold'>Click here to change the color theme </p></button>
        </motion.div>
      </div>
    </section>
        </motion.div>
      </div>
      {isDesktop && (<div className="w-1 h-7"></div>)}
       <LineGradient />
      <div className="w-5/6 mx-auto md:h-full ">
         <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("skills")}
        >
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
          <div className=" mx-4 "> 
          <div className="flex flex-col items-center"> 
          <p className="tracking-wider font-oswald font-semibold text-4xl mt-10 mb-10">SKILL  
          <span className={`${textColorAccent}`}> LIBRARY</span>
          </p>
          </div>
          {/* text stactic and flying in on hover  */}

        <div className="flex flex-wrap w-full  relative ">
          {/* Book shelfs to the left  animate seperat?*/}
          <div
        className="relative w-2/3 max-w-[200px] md:max-w-[350px] flex "
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
        className={`text-2xl absolute mt-20  text-right right-1/2  opacity-0 transition-opacity duration-200 ${
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
        className={`text-2xl absolute  text-right  right-1/2 opacity-0 transition-opacity duration-200 ${
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
          <div className="flex flex-wrap w-full mx-auto text-xl text-center">
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
</motion.div> 
</div>
  
      {isDesktop &&(<div className="w-1 h-20"></div>)}
      <div className="w-5/6 mx-auto">
         <motion.div
          margin="0 0 -200px 0 "
          amount="all"
          onViewportEnter={() => setSelectedPage("projects")}
        > 
             <section id="projects" className="pt-16 pb-24  ">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5  "
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-oswald font-semibold text-4xl m-3">
           <span className="text-primary-text"> PROJECTS </span> 
          </p>
          <div className="flex my-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
      </motion.div>

      {/* PROJECTS */}
      {isDesktop ? (
        <div className="flex flex-wrap  w-full ">
     
         <div className="w-2/3 h-fit m-3 border-solid border-2 overflow-hidden rounded-3xl">
         <a title="Click for the Demo" target="_blank" rel="noreferrer" href="https://recipe-scraper.herokuapp.com/"><img src={`${recipeScraper}`} alt="recipe-web-scraper"/> </a> </div>
         <div className={`w-1/4 h-90 m-3 border-solid border-2 p-4 rounded-3xl ${secondary}`} >
         <h2 className="font-bold text-3xl pb-3 ">Recipe-Scraper</h2>
          <p className=" text-lg">
           I build a simple App interface where you can query through the recipes form the blog <a className="font-semibold hover:text-pink-500 hover:underline" href="https://pinchofyum.com/recipes/all"  rel="noreferrer" target="_blank" > Pinchofyum</a>.
          <br/>
           You can use different filters and get some random recipe ideas.
          <br/>
           This was a fun personal project where I used Node.js for the Web Scraping part, MongoDB for storing and accessing data and EJS to display the results. <br/>
           </p>
           <div className="flex  justify-start  ">
           <div className=" bg-white px-2 py-2 mt-3 m-1 flex rounded-lg w-fit font-bold ">
            <a className=" hover:opacity-50 transition duration-500 flex text-black bg-white" href="https://github.com/EricStrohmaier/RecipeApp-" target="_blank" rel="noreferrer">
              <p className={`text-black`}>Code Here</p>
              <img className="ml-1" alt="github-link" src="../assets/icons/github.png" />
            </a>
            </div>
            <div className=" bg-white px-2 py-2 mt-3 m-1 flex rounded-lg w-fit font-bold ">
            <a className="hover:opacity-50 transition duration-500" href="https://recipe-scraper.herokuapp.com/" target="_blank" rel="noreferrer">
              <p className={`text-black`}>Demo Here</p>
            </a>
          </div></div>


          
         </div>
         <div className={`w-1/4 h-80 m-3  border-solid border-2 rounded-3xl ${primary} flex justify-center items-center`}  >
         <button onClick={handleChangeTheme} className= {`${secondary} hover:p-3 hover:text-lg duration-200 rounded-lg flex justify-center items-center p-2`}>Change Theme manually</button>
         </div>
         <div className={`w-2/3 h-80 m-3 border-solid border-2 rounded-3xl flex justify-center items-center filter bg-blur-3xl bg-gradient-to-l ${fromBackground} ${viaAccent} ${toBackground} `}>
            <div className={`font-semibold text-3xl m-6 flex justify-center items-center `} >
              <div className="text-center">
                The <span className={`font-extrabold  drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] bg-gradient-to-r  ${fromColor} ${toColor} text-transparent bg-clip-text`}>Color-Theme</span> for this Website is changing throughout the day.
                <p className="text-xl pt-6">I choose bright themes for the day and dark themes for night.</p>
              </div>
            </div>
          </div>
          <div className="w-2/3 h-80 border-solid border-2 rounded-3xl flex justify-center items-center m-3 overflow-hidden text-xl font-medium">
          Constantly working on  Projects   will be continued...
          </div>
          <div className="w-1/4 h-96 border-solid border-2 rounded-3xl flex justify-center items-center m-3 overflow-hidden relative group">
          <div className="hover:scale-105 duration-200 absolute w-full h-full top-0 left-0 z-10">
            <a target="_blank" rel="noreferrer" href="https://thebnkr.banskolab.com/">
              <img className="z-0 w-full h-full object-cover" alt="website" src={`${bnkr}`} />
            </a>
            <div className="absolute bottom-0 w-full z-20 text-white font-semibold text-center group">
            <button className="pb-3">{`This is a functional landing page using plain HTML, CSS and JavaScript for a night club.`}</button>
          </div>
          </div>
</div>
      </div>
      ) : (
   <div className="flex flex-wrap  w-full ">
     
  <div className="w-full h-90 m-3 border-solid border-2 overflow-hidden rounded-3xl">
  <a  target="_blank" rel="noreferrer" href="https://recipe-scraper.herokuapp.com/"><img src={`${recipeScraper}`} alt="recipe-web-scraper"/> </a> </div>
     <div className={`w-full h-90 m-3 border-solid border-2 p-4 rounded-3xl ${secondary}`} >
     <h2 className="font-bold text-3xl pb-3 ">Recipe-Web-Scraper</h2>
      <p className=" text-lg">This App Scrapes all the recipes from the blog <a className="font-semibold hover:text-pink-500 hover:underline" href="https://pinchofyum.com/recipes/all"  rel="noreferrer" target="_blank" > Pinchofyum</a>.<br/>
       I build a simple interface where you can query through  the data with different filters.<br/>
       This was a fun personal project where I learnt a lot about Node.js and EJS <br/>
       </p>
       <div className="flex  justify-start  ">
           <div className=" bg-white px-2 py-2 mt-3 m-1 flex rounded-lg w-fit font-bold ">
            <a className=" hover:opacity-50 transition duration-500 flex text-black bg-white" href="https://github.com/EricStrohmaier/RecipeApp-" target="_blank" rel="noreferrer">
              <p className={`text-black`}>Code Here</p>
              <img className="ml-1" alt="github-link" src="../assets/icons/github.png" />
            </a>
            </div>
            <div className=" bg-white px-2 py-2 mt-3 m-1 flex rounded-lg w-fit font-bold ">
            <a className="hover:opacity-50 transition duration-500" href="https://recipe-scraper.herokuapp.com/" target="_blank" rel="noreferrer">
              <p className={`text-black`}>Demo Here</p>
            </a>
          </div></div>
      
     </div>
     <div className={`w-full h-80 m-3  border-solid border-2 rounded-3xl ${primary} flex justify-center items-center`}  >
     <button onClick={handleChangeTheme} className= {`${secondary} hover:p-3 hover:text-lg duration-200 rounded-lg flex justify-center items-center p-2`}>Change Theme manually</button>
     </div>
     <div className={`w-full h-80 m-3 border-solid border-2 rounded-3xl flex justify-center items-center filter bg-blur-3xl bg-gradient-to-t ${fromBackground} ${viaAccent} ${toBackground} `}>
        <div className={`font-semibold text-3xl m-6 flex justify-center items-center `} >
          <div className="text-center pt-5">
            The <span className={`font-extrabold bg-gradient-to-r  drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] ${fromColor} ${toColor} text-transparent bg-clip-text`}>Color-Theme</span> for this Website is changing throughout the day.
            <p className="text-xl py-5">I choose bright themes for the day and dark themes for night.</p>
          </div>
        </div>
      </div> 
      <div className="w-full h-80 border-solid border-2 rounded-3xl flex justify-center items-center m-3 overflow-hidden text-xl font-medium "> Constantly working on  Projects   will be continued... 
      </div> 
       <div className="w-full h-96 border-solid border-2 rounded-3xl flex justify-center items-center m-3 overflow-hidden relative group">
          <div className="hover:scale-105 duration-200 absolute w-full h-full top-0 left-0 z-10 overflow-hidden">
            <a target="_blank" rel="noreferrer" href="https://thebnkr.banskolab.com/">
              <img className="z-0 w-full h-full object-cover" alt="website" src={`${bnkr}`} />
            </a>
            <div className="absolute bottom-0 w-full z-20 text-white font-semibold text-center group">
            <button className="px-3 pb-4">{`This is a functional landing page for a night club. Using plain HTML, CSS and JavaScript .`}</button>
          </div>
          </div>
  </div>
  </div>
  )}
    </section>
       </motion.div> 
      </div>
   
      <LineGradient />

      {isDesktop &&(
      <div className="w-1 h-24"></div> )}
      <div className="w-5/6 mx-auto md:h-full">
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("contact")}
        >
   <section id="contact" className="contact py-24">
      {/* HEADINGS */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 },
        }}
        className="flex justify-end w-full"
      >
        <div>
          <p className="font-oswald font-semibold text-4xl">
          CONTACT ME {""}
            {/* <span className={`${textColorSecondary}`}> </span>  */}
          </p>
          <div className="flex md:justify-end my-5">
            <LineGradient width="w-1/2" />
          </div>
        </div>
      </motion.div>

      {/* FORM & IMAGE */}
      <div className="md:flex md:justify-between gap-16 mt-5">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className="basis-1/2 flex justify-center"
        >
          <Lottie animationData={animationData}/>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className="basis-1/2 mt-10 md:mt-0"
        >
          <form
            target="_blank"
            onSubmit={onSubmit}
            action="https://formsubmit.co/9df944b5a4bcf29a0124b16fe3d9d4b6 "
            method="POST"
            
          >
            <input
              className={`w-full rounded-lg ${secondary}  font-semibold ${placeholderText} p-3`}
              type="text"
              placeholder="NAME"
              {...register("name", {
                required: true,
                maxLength: 100,
              })}
            />
            {errors.name && (
              <p className={`text-accent ${textColorAccent} mt-1`}>
                {errors.name.type === "required" && "This field is required."}
                {errors.name.type === "maxLength" && "Max length is 100 char."}
              </p>
            )}

            <input
              className={`w-full rounded-lg ${secondary} font-semibold ${placeholderText} p-3 mt-5`}
              type="email"
              placeholder="EMAIL"
           
              {...register("email", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
            />
            {errors.email && (
              <p className={`text-accent ${textColorAccent} mt-1`}>
                {errors.email.type === "required" && "This field is required."}
                {errors.email.type === "pattern" && "Invalid email address."}
              </p>
            )}

            <textarea
              className={`w-full rounded-lg ${secondary} font-semibold ${placeholderText} p-3 mt-5`}
              name="message"
              placeholder="MESSAGE"
              rows="4"
              cols="50"
              {...register("message", {
                required: true,
                maxLength: 2000,
              })}
            />
            {errors.message && (
              <p className={`text-accent ${textColorAccent} mt-1`}>
                {errors.message.type === "required" &&
                  "This field is required."}
                {errors.message.type === "maxLength" &&
                  "Max length is 2000 char."}
              </p>
            )}

            <button
              className={`p-5 ${secondary} rounded-lg font-semibold  mt-5  ${hoverPrimaryColor} transition duration-500`}
              type="submit"
            >
              SEND ME A MESSAGE
            </button>
          </form>
        </motion.div>
      </div>
    </section>
        </motion.div>
      </div>
      {isDesktop &&(<div className="w-1 h-24"></div>)}
      </div>
      <footer className={`h-28 ${primary}  pt-10`}>
      <div className="w-10/12 mx-auto">
      
        <div className="md:flex  md:justify-between text-center ">
          <p className="absoulute pb-5">
            <SocialMediaIcons />
            
          </p>
          <p className="font-playfair text-md text-primary-color pb-5">
          Copyright © 2023 All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
    </div>
  
  );
}

export default App;
