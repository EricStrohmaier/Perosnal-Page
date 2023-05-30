import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
  return (
    <footer className="h-28 bg-background  pt-10">
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
  );
};

export default Footer;
