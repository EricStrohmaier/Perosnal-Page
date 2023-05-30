import React, { useState, useEffect } from 'react';
import {themes} from "../hooks/themes"

const useColorTheme = () => {
  const [colorTheme, setColorTheme] = useState({});

  useEffect(() => {
    const getCurrentTheme = () => {
      const currentTime = new Date();
      //const currentHour = currentTime.getHours();
      const currentHour = 22;
       
      // Define your time ranges for each theme
      const themeRanges = [
        { theme: 'theme1', name: "theme1", startHour: 6, endHour: 9 }, // theme1 from 6 AM to 11 AM
        { theme: 'theme2', name: "theme2", startHour: 9, endHour: 11 },
        { theme: 'theme3', name: "theme3", startHour: 11, endHour: 14 },
        { theme: 'theme4', name: "theme4", startHour: 14, endHour: 16 },
        { theme: 'theme5', name: "theme5", startHour: 16, endHour: 18 },
        { theme: 'theme6', name: "theme6", startHour: 18, endHour: 21 },
        { theme: 'theme7', name: "theme7", startHour: 21, endHour: 24 },
        { theme: 'theme8', name: "theme8", startHour: 24, endHour: 6 },
      ];

      // Find the theme that matches the current time range
      const currentTheme = themeRanges.find(
        (range) => currentHour >= range.startHour && currentHour <= range.endHour
      );

      // If a matching theme is found, set the color theme
      if (currentTheme) {
        const themeColorValues = themes[currentTheme.theme];
        setColorTheme({ ...themeColorValues, name: currentTheme.name });
      }
  
    };
    getCurrentTheme();  
    
// eslint-disable-next-line react-hooks/rules-of-hooks
  getCurrentTheme();

  
  // Check and update the theme every minute
  const timer = setInterval(getCurrentTheme, 60000);

  // Clean up the timer when the component unmounts
  return () => clearInterval(timer);
}, []);

  return colorTheme;

};

//   const handleChangeColor = (direction) => {
//     const currentIndex = colors.indexOf(colorTheme);
//     let newIndex;

//     if (direction === 'forward') {
//       newIndex = (currentIndex + 1) % colors.length;
//     } else if (direction === 'backward') {
//       newIndex = (currentIndex - 1 + colors.length) % colors.length;
//     }

//     const newColorTheme = colors[newIndex];
//     setColorTheme(newColorTheme);
//   };


export default useColorTheme;
