import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import useMediaQuery from "../hooks/useMediaQuery";



const Projects = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
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
          <p className="font-oswald font-semibold text-4xl">
           <span className="text-primary-text"> PROJECTS </span> 
          </p>
          <div className="flex mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
      </motion.div>

      {/* PROJECTS */}
      {isDesktop ? (
        <div className="flex flex-wrap  w-full">
     
         <div className="w-2/3 h-90 m-1 border-solid border-2 overflow-hidden ">
         <video controls  loop autoPlay muted>
         <source src={require("./RecipeWebScraperApp.mp4")} type="video/mp4"/> 
         </video> </div>
         <div className="w-1/4 h-90 m-1 border-solid border-2 p-4">
         <h2 className="font-bold text-3xl pb-3 ">Recipe-Web-Scraper</h2>
          <p className=" text-lg">This App Scrapes all the recipes from the blog <a className="font-semibold hover:text-pink-500 hover:underline" href="https://pinchofyum.com/recipes/all"  rel="noreferrer" target="_blank" > Pinchofyum</a>.<br/>
           I build a simple interface where you can query through  the data with different filters.<br/>
           This was a fun personal project where I learnt a lot about Node.js and EJS <br/>
           </p>
           <div className="flex justify-center align-baseline bg-white px-3 p-2 mt-3 rounded w-fit font-bold">
            <a className="hover:opacity-50 transition duration-500 flex  bg-white"
        href="https://github.com/EricStrohmaier/RecipeApp-"
        target="_blank"
        rel="noreferrer"
      >Code here 
        <img className="ml-2" alt="github-link" src="../assets/icons/github.png" />
      </a></div>
          
         </div>
         <div className="w-1/4 h-80 m-1 border-solid border-2 "></div>
         <div className="w-2/3 h-80 m-1 border-solid border-2 ">
         <div className="font-semibold text-3xl m-5 flex justify-center items-center">
            <div className="text-center">
              The <span className={` font-bold `}>Color-Theme</span>  for this Website is changing throughout the day. 
              <br/> <span className="p-4">How? </span> <br/>
             <p className="text-xl"> I choose bright themes for the day and dark ones for night.</p>
            </div>
          </div>

         </div>
      
      </div>
      ) : (
    <div className="flex flex-wrap  w-full">
     
     <div className="w-full h-80 m-1 border-solid border-2"> 

     <video  loop autoPlay muted>
         <source src={require("./RecipeWebScraperApp.mp4")} type="video/mp4"/> 
         </video> </div>
     <div className="w-1/3 h-80 m-1 border-solid border-2 "></div>
     <div className="w-1/3 h-80 m-1 border-solid border-2 "></div>
     <div className="w-full h-80 m-1 border-solid border-2 "></div>
  
  </div>)}
      
    </section>
  );
};

export default Projects;
