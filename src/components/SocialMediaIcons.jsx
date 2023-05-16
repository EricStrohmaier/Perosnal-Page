const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start ">
      <a
        className="hover:opacity-50 transition duration-500  pr-5"
        href="https://www.linkedin.com/in/eric-strohmaier-3a0767267/"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="linkedin-link" src="../assets/linkedin.png" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500 max-w-[40px] max-h-[40px] rounded-sm bg-white"
        href="https://github.com/EricStrohmaier"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="github-link" src="../assets/icons/github.png" />
      </a>
      {/* <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.twitter.com"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="twitter-link" src="../assets/twitter.png" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.facebook.com"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="facebook-link" src="../assets/facebook.png" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.instagram.com"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="instagram-link" src="../assets/instagram.png" />
      </a> */}
    </div>
  );
};

export default SocialMediaIcons;
