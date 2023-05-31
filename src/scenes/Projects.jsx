import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";


const Projects = () => {
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
      <div className="flex flex-wrap  w-full">
     
         <div className="w-2/3 h-80 m-1 border-solid border-2"></div>
         <div className="w-1/4 h-80 m-1 border-solid border-2 "></div>
         <div className="w-1/4 h-80 m-1 border-solid border-2 "></div>
         <div className="w-2/3 h-80 m-1 border-solid border-2 "></div>
      
      </div>
    </section>
  );
};

export default Projects;
