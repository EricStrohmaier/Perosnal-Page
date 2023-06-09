import useColorTheme from './ColorTheme';

const ColorStyles = () => {
  const backgroundAccent = {
    theme1: 'bg-theme1-accent',
    theme3: 'bg-theme3-accent',
    theme2: 'bg-theme2-accent',
    theme4: 'bg-theme4-accent',
    theme5: 'bg-theme5-accent',
    theme6: 'bg-theme6-accent',
    theme7: 'bg-theme7-accent',
    theme8: 'bg-theme8-accent',
    
  };
  const textAccent = {
    theme1: 'text-theme1-accent',
    theme3: 'text-theme3-accent',
    theme2: 'text-theme2-accent',
    theme4: 'text-theme4-accent',
    theme5: 'text-theme5-accent',
    theme6: 'text-theme6-accent',
    theme7: 'text-theme7-accent',
    theme8: 'text-theme8-accent',
  };
  const textSecondary = {
    theme1: 'text-theme1-secondary',
    theme3: 'text-theme3-secondary',
    theme2: 'text-theme2-secondary',
    theme4: 'text-theme4-secondary',
    theme5: 'text-theme5-secondary',
    theme6: 'text-theme6-secondary',
    theme7: 'text-theme7-secondary',
    theme8: 'text-theme8-secondary',
  };

  const backgroundPrimary = {
    theme1: 'bg-theme1-primary',
    theme3: 'bg-theme3-primary',
    theme2: 'bg-theme2-primary',
    theme4: 'bg-theme4-primary',
    theme5: 'bg-theme5-primary',
    theme6: 'bg-theme6-primary',
    theme7: 'bg-theme7-primary',
    theme8: 'bg-theme8-primary',
    // Add more color variants for each theme
  };

  const backgroundSecondary = {
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
  const colorVariants = {
    theme1: 'bg-theme1-background text-theme1-textColor',
    theme3: 'bg-theme3-background text-theme2-textColor  ',
    theme2: 'bg-theme2-background text-theme3-textColor ',
    theme4: 'bg-theme4-background text-theme4-textColor ',
    theme5: 'bg-theme5-background text-theme5-textColor ',
    theme6: 'bg-theme6-background text-theme6-textColor ',
    theme7: 'bg-theme7-background text-theme7-textColor ',
    theme8: 'bg-theme8-background text-theme8-textColor ',
    // Add more color variants for each theme
  };
  const borderPrimary = {
    theme1: 'before:border-theme1-primary',
    theme3: 'before:border-theme3-primary',
    theme2: 'before:border-theme2-primary',
    theme4: 'before:border-theme4-primary',
    theme5: 'before:border-theme5-primary',
    theme6: 'before:border-theme6-primary',
    theme7: 'before:border-theme7-primary',
    theme8: 'before:border-theme8-primary',
  };
  const textColor = {
    theme1: 'text-theme1-textColor',
    theme3: 'text-theme2-textColor  ',
    theme2: 'text-theme3-textColor ',
    theme4: 'text-theme4-textColor ',
    theme5: 'text-theme5-textColor ',
    theme6: 'text-theme6-textColor ',
    theme7: 'text-theme7-textColor ',
    theme8: 'text-theme8-textColor ',
    // Add more color variants for each theme
  };
  const textColorPrimary = {
    theme1: 'hover:text-theme1-primary',
    theme3: 'hover:text-theme2-primary  ',
    theme2: 'hover:text-theme3-primary ',
    theme4: 'hover:text-theme4-primary ',
    theme5: 'hover:text-theme5-primary ',
    theme6: 'hover:text-theme6-primary ',
    theme7: 'hover:text-theme7-primary ',
    theme8: 'hover:text-theme8-primary ',
    // Add more color variants for each theme
  };
  const hoverBgPrimary = {
    theme1: 'hover:bg-theme1-primary',
    theme3: 'hover:bg-theme2-primary  ',
    theme2: 'hover:bg-theme3-primary ',
    theme4: 'hover:bg-theme4-primary ',
    theme5: 'hover:bg-theme5-primary ',
    theme6: 'hover:bg-theme6-primary ',
    theme7: 'hover:bg-theme7-primary ',
    theme8: 'hover:bg-theme8-primary ',
    // Add more color variants for each theme
  };
  const placeholderColorText = {
    theme1: 'placeholder-theme1-textColor',
    theme3: 'placeholder-theme2-textColor  ',
    theme2: 'placeholder-theme3-textColor ',
    theme4: 'placeholder-theme4-textColor ',
    theme5: 'placeholder-theme5-textColor ',
    theme6: 'placeholder-theme6-textColor ',
    theme7: 'placeholder-theme7-textColor ',
    theme8: 'placeholder-theme8-textColor ',
  };
  const linearFirstColor = {
    theme1: 'from-theme1-accent',
    theme3: 'from-theme2-accent  ',
    theme2: 'from-theme3-accent ',
    theme4: 'from-theme4-accent ',
    theme5: 'from-theme5-accent ',
    theme6: 'from-theme6-accent ',
    theme7: 'from-theme7-accent ',
    theme8: 'from-theme8-accent ',
    // Add more color variants for each theme
  };
  const linearBgFromColor = {
    theme1: 'from-bg-theme1-primary',
    theme3: 'from-bg-theme2-primary  ',
    theme2: 'from-bg-theme3-primary ',
    theme4: 'from-bg-theme4-primary ',
    theme5: 'from-bg-theme5-primary ',
    theme6: 'from-bg-theme6-primary ',
    theme7: 'from-bg-theme7-primary ',
    theme8: 'from-bg-theme8-primary ',
    // Add more color variants for each theme
  };
  const linearBgToColor = {
    theme1: 'to-bg-theme1-accent',
    theme3: 'to-bg-theme2-accent  ',
    theme2: 'to-bg-theme3-accent ',
    theme4: 'to-bg-theme4-accent ',
    theme5: 'to-bg-theme5-accent ',
    theme6: 'to-bg-theme6-accent ',
    theme7: 'to-bg-theme7-accent ',
    theme8: 'to-bg-theme8-accent ',
    // Add more color variants for each theme
  };
  const linearSecondColor = {
    theme1: 'to-theme1-secondary',
    theme3: 'to-theme2-secondary  ',
    theme2: 'to-theme3-secondary ',
    theme4: 'to-theme4-secondary ',
    theme5: 'to-theme5-secondary ',
    theme6: 'to-theme6-secondary ',
    theme7: 'to-theme7-secondary ',
    theme8: 'to-theme8-secondary ',
    // Add more color variants for each theme
  };
  const linearBackground = {
    theme1: 'from-theme1-background',
    theme3: 'from-theme2-background  ',
    theme2: 'from-theme3-background ',
    theme4: 'from-theme4-background ',
    theme5: 'from-theme5-background ',
    theme6: 'from-theme6-background ',
    theme7: 'from-theme7-background ',
    theme8: 'from-theme8-background ',
    // Add more color variants for each theme
  };
  const linearBackgroundSecond = {
    theme1: 'to-theme1-background',
    theme3: 'to-theme2-background  ',
    theme2: 'to-theme3-background ',
    theme4: 'to-theme4-background ',
    theme5: 'to-theme5-background ',
    theme6: 'to-theme6-background ',
    theme7: 'to-theme7-background ',
    theme8: 'to-theme8-background ',
    // Add more color variants for each theme
  };
  const linearViaBackground = {
    theme1: 'via-theme1-primary',
    theme3: 'via-theme2-primary  ',
    theme2: 'via-theme3-primary ',
    theme4: 'via-theme4-primary ',
    theme5: 'via-theme5-primary ',
    theme6: 'via-theme6-primary ',
    theme7: 'via-theme7-primary ',
    theme8: 'via-theme8-primary ',
    // Add more color variants for each theme
  };
  const {colorTheme, handleChangeTheme}  = useColorTheme();

  const themeName = colorTheme.name;
  const appClass = colorVariants[themeName];
  const accent = backgroundAccent[themeName];
  const primary = backgroundPrimary[themeName];
  const secondary = backgroundSecondary[themeName];
  const textColorAccent = textAccent[themeName];
  const textColorSecondary = textSecondary[themeName];
  const boderPrimary = borderPrimary[themeName];
  const colorText = textColor[themeName];
  const primaryColorText =textColorPrimary[themeName]
  const hoverPrimaryColor = hoverBgPrimary[themeName];
  const placeholderText = placeholderColorText[themeName];
  const toColor = linearFirstColor[themeName];
  const fromColor = linearSecondColor[themeName];
  const fromBackground = linearBackground[themeName];
  const toBackground = linearBackgroundSecond[themeName];
  const viaAccent = linearViaBackground[themeName];
  const fromBgColor = linearBgFromColor[themeName];
  const toBgColor = linearBgToColor[themeName];

  return {fromBgColor, toBgColor,viaAccent,toBackground,fromBackground,placeholderText,toColor,fromColor, accent, primary, secondary, appClass, textColorAccent,textColorSecondary, boderPrimary, colorText,primaryColorText ,hoverPrimaryColor, handleChangeTheme };
};

export default ColorStyles;
