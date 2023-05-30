import AnchorLink from "react-anchor-link-smooth-scroll";
import ColorStyles from "../hooks/ColorStyles";

  
const DotGroup = ({ selectedPage, setSelectedPage }) => {
  const { primary,boderPrimary, secondary } = ColorStyles();
  const selectedStyles = `relative ${primary} before:absolute before:w-6 before:h-6 before:rounded-full
    before:border-2 ${boderPrimary} before:left-[-50%] before:top-[-50%]`;
  
  return (
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
  );
};

export default DotGroup;
