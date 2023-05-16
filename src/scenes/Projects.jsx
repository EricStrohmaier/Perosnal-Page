import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-oswald">{title}</p>
        <p className="mt-7">
          Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Nulla
          porttitor accumsan tincidunt.
        </p>
      </div>
      <img src={`../assets/${projectTitle}.jpeg`} alt={projectTitle} />
    </motion.div>
  );
};

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
