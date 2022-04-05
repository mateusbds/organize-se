import { createTheme, Table as MuiTable, TableProps, ThemeProvider, useTheme } from '@mui/material';
import { ptBR } from '@mui/material/locale';

export const Table: React.FC<TableProps> = ({ children, ...props }) => {
  const theme = useTheme();
  const themeLocale = createTheme(theme, ptBR);

  return (
    <ThemeProvider theme={themeLocale}>
      <MuiTable {...props}>{children}</MuiTable>
    </ThemeProvider>
  );
};
