import { IconButton, useTheme } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';

import { AppBar, Toolbar } from './styled';

type NavbarProps = {
  isCollapsed: boolean;
};

const Navbar: React.FC<NavbarProps> = ({ isCollapsed }) => {
  const theme = useTheme();

  return (
    <AppBar isCollapsed={isCollapsed} position="fixed">
      <Toolbar>
        <IconButton
          sx={{ ml: 'auto' }}
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          // onClick={handleMenu}
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
