
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

import useColorTheme from "../hooks/ColorTheme";

const Landing = ({ setSelectedPage }) => {

  const backgroundAccent = {
    theme1: 'bg-theme1-accent',
    theme3: 'bg-theme3-accent  ',
    theme2: 'bg-theme2-accent ',
    theme4: 'bg-theme4-accent ',
    theme5: 'bg-theme5-accent ',
    theme6: 'bg-theme6-accent ',
    theme7: 'bg-theme7-accent ',
    theme8: 'bg-theme8-accent ',
    // Add more color variants for each theme
  };
    const backgroundPrimary = {
    theme1: 'bg-theme1-primary ',
    theme3: 'bg-theme3-primary ',
    theme2: 'bg-theme2-primary ',
    theme4: 'bg-theme4-primary ',
    theme5: 'bg-theme5-primary ',
    theme6: 'bg-theme6-primary ',
    theme7: 'bg-theme7-primary ',
    theme8: 'bg-theme8-primary ',
    // Add more color variants for each theme
  };  const backgroundSecondary = {
    theme1: 'bg-theme1-secondary',
    theme3: 'bg-theme3-secondary',
    theme2: 'bg-theme2-secondary',
    theme4: 'bg-theme4-secondary',
    theme5: 'bg-theme5-secondary',
    theme6: 'bg-theme6-secondary',
    theme7: 'bg-theme7-secondary',
    theme8: 'bg-theme8-secondary',
    // Add more color variants for each theme
  };
  
  const colorTheme = useColorTheme();
  const themeName = colorTheme.name;
  const accent = backgroundAccent[themeName];
  const primary = backgroundPrimary[themeName];
  const secondary = backgroundSecondary[themeName];

  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section
      id="home"
      className="md:flex md:justify-between md:items-center gap-16 md:h-full py-10"
    >
    <div className="basis-3/5  mt-16 md:mt-32 flex justify-center md:order-2">
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
      {/* IMAGE SECTION */}
      
        {/* class is for the form behind the picture */}
        {isAboveLarge ? (
          <div className="relative group">
          <img
            alt="profile"
            className=" w-full max-w-[200px] md:max-w-[300px] rounded-lg relative z-10 "
            src="assets/profile-image.png"
          />
          {/* background blog   make it glowing on hold ? */}
            <div className={`absolute top-0 left-0 w-full h-full scale-110 rounded-lg ${accent} z-0 filter blur-3xl opacity-0 group-hover:opacity-80  duration-500  `}></div>
          </div>
        ) : (
          <img
            alt="profile"
            className="z-10 w-full max-w-[200px] md:max-w-[300px] rounded-lg"
            src="assets/profile-image.png"
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

          <p className="mt-10 mb-7 text-sm text-center md:text-start">
            Adipiscing arcu, in aliquam fringilla cursus. Elit arcu elementum
            viverra malesuada sem ac faucibus dolor. Sagittis scelerisque.
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
        className={`relative  ${primary}  rounded-lg py-3 px-7 font-semibold transition duration-200 overflow-hidden hover:-translate-y-1`} 
        onClick={() => setSelectedPage("contact")}
        href="#contact"
      >
        <span className="relative z-10">Contact Me</span>
      </AnchorLink>
        <div className="w-3 h-1"></div>
          <AnchorLink
            className={`rounded-lg  hover:-translate-y-1  transition duration-200 ${secondary} p-0.5 `} 
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            <div className="   w-full h-full flex items-center justify-center px-10 font-oswald">
              Download CV
            </div>
          </AnchorLink>
        </motion.div>
{/* social media tags ?  */}
        {/* <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <SocialMediaIcons />
        </motion.div> */}
      </div>
    </section>
  );
};

export default Landing;
