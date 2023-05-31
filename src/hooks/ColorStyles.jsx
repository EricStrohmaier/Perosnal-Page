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

  return { accent, primary, secondary, appClass, textColorAccent,textColorSecondary, boderPrimary, colorText,primaryColorText ,hoverPrimaryColor, handleChangeTheme };
};

export default ColorStyles;
