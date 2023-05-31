import { useState, useEffect } from 'react';
import { themes } from "../hooks/themes";

const useColorTheme = () => {
  const [colorTheme, setColorTheme] = useState({});
  const themeKeys = Object.keys(themes);
  const [currentThemeKey, setCurrentThemeKey] = useState(themeKeys[0]);

  const handleChangeTheme = () => {
    const currentIndex = themeKeys.indexOf(currentThemeKey);
    const nextIndex = (currentIndex + 1) % themeKeys.length;
    const nextThemeKey = themeKeys[nextIndex];
    setCurrentThemeKey(nextThemeKey);
    setColorTheme(themes[nextThemeKey]);
    console.log(nextThemeKey);
  };

  useEffect(() => {
    const getCurrentTheme = () => {
      const currentTime = new Date();
      const currentHour = currentTime.getHours();

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

      const currentTheme = themeRanges.find(
        (range) => currentHour >= range.startHour && currentHour <= range.endHour
      );

      if (currentTheme) {
        const themeColorValues = themes[currentTheme.theme];
        setColorTheme({ ...themeColorValues, name: currentTheme.name });
      }
    };

    const timer = setInterval(getCurrentTheme, 60000);
    getCurrentTheme(); // Get the initial theme on mount

    return () => clearInterval(timer);
  }, []);

  return { colorTheme, handleChangeTheme };
};

export default useColorTheme;
