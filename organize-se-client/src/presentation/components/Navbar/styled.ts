import { AppBar as MuiAppBar, Toolbar as MuiToolbar, alpha, styled } from '@mui/material';

import { DRAWER_WIDTH_OPEN, DRAWER_WIDTH_COLLAPSED } from '../Sidebar/styled';

export const NAVBAR_HEIGHT = 92;

type NavbarProps = {
  isCollapsed: boolean;
};

export const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop: string) => !['isCollapsed'].includes(prop),
})<NavbarProps>(({ theme, isCollapsed }) => ({
  backgroundColor: alpha(theme.palette.background.default, 0.57),
  backgroundImage: 'none',
  boxShadow: 'none',
  width: `calc(100% - ${DRAWER_WIDTH_OPEN}px)`,
  height: NAVBAR_HEIGHT,
  marginLeft: `${DRAWER_WIDTH_OPEN}px`,
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.easeOut,
    duration: theme.transitions.duration.enteringScreen,
  }),
  ...(isCollapsed && {
    width: `calc(100% - ${DRAWER_WIDTH_COLLAPSED}px)`,
    marginLeft: `${DRAWER_WIDTH_COLLAPSED}px`,
  }),
}));

export const Toolbar = styled(MuiToolbar)(({ theme }) => ({
  color: theme.palette.text.secondary,
  height: NAVBAR_HEIGHT,
}));
