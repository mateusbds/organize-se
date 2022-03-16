import { AppBar as MuiAppBar, Toolbar, IconButton, Button, styled, alpha, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const AppBar = styled(MuiAppBar)(({ theme }) => ({
  backgroundColor: alpha(theme.palette.background.default, 0.57),
  color: theme.palette.getContrastText(theme.palette.background.default),
}));

const Navbar = () => {
  const theme = useTheme();

  return (
    <AppBar position="fixed">
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
