const LineGradient = ({ width = "w-full", reverse = "rainblue" }) => {
  return <div className={`h-0.5 ${width} bg-gradient-${reverse}`} />;
};

export default LineGradient;
