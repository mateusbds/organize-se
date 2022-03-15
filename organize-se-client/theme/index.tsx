import { useMemo } from 'react';
import { CssBaseline, ThemeOptions } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import componentsOverrides from './overrides';
import { palette } from './palette';
import typography from './typography';

const ThemeConfig: React.FC = ({ children }) => {
  const themeOptions: ThemeOptions = useMemo(
    () => ({
      palette: palette.dark,
      typography,
    }),
    []
  );

  const theme = createTheme({ ...themeOptions });
  theme.components = componentsOverrides(theme);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default ThemeConfig;
