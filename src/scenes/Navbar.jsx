
import { useState } from 'react';
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";
import ColorStyles from "../hooks/ColorStyles";

const Link = ({ page, selectedPage, setSelectedPage }) => {
  const {  primaryColorText} = ColorStyles();
  const lowerCasePage = page.toLowerCase();
  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage ? `text-black` : "text-black"
      } ${primaryColorText} transition duration-500`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const navbarBackground = isTopOfPage ? "glass" : "glass";
  return (
    <>
      {isDesktop ? (
        <nav className={`${navbarBackground}  z-40 w-full fixed top-0 py-2`}>
          <div className="flex items-center justify-between mx-auto w-5/6">
            <h4 className={`font-oswald text-xl font-bold text-black `}>Eric Strohmaier</h4>

            <div className="flex justify-between gap-16 font-opensans text-sm font-semibold">
              <Link
                page="Home"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Skills"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Projects"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Contact"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </div>
          </div>
        </nav>
      ) : (
        <button
          className={`rounded-full right-0 fixed top-0 m-6 glass p-2`}
          onClick={() => setIsMenuToggled(!isMenuToggled)}
        >
          <img cl alt="menu-icon" src="../assets/menu-icon.svg" />
        </button>
      )}

      {!isDesktop && isMenuToggled && (
        <div className={`fixed z-40 right-0 bottom-0 h-full glass w-[200px]`}>
          {/* CLOSE ICON */}
          <div className="flex justify-end p-9">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <img className={`bg-slate-800`} alt="close-icon" src="../assets/close-icon.svg" />
            </button>
          </div>

          {/* MENU ITEMS */}
          <div className={`flex flex-col text-center gap-10 mx-[23%] text-2xl `}>
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Skills"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Projects"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Contact"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
