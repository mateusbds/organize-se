import {
  CSSObject,
  Drawer as MuiDrawer,
  ListItemButton as MuiListItemButton,
  ListItemIcon as MuiListItemIcon,
  styled,
  Theme,
} from '@mui/material';

import { NAVBAR_HEIGHT } from '../Navbar/styled';

export const DRAWER_WIDTH_OPEN = 280;
export const DRAWER_WIDTH_COLLAPSED = 92;

export const openedMixin = (theme: Theme): CSSObject => ({
  width: DRAWER_WIDTH_OPEN,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

export const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: DRAWER_WIDTH_COLLAPSED,
});

export const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  height: NAVBAR_HEIGHT,
}));

export const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop: string) => !['open'].includes(prop) })(
  ({ theme, open }) => ({
    width: DRAWER_WIDTH_OPEN,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  })
);

export const ListItemButtonStyled = styled(MuiListItemButton)(({ theme, selected }) => ({
  marginTop: theme.spacing(0.5),
  marginBottom: theme.spacing(0.5),
  marginLeft: theme.spacing(1.1),
  marginRight: theme.spacing(1),
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  ...theme.typography.subtitle2,
  color: selected ? theme.palette.primary.main : theme.palette.text.secondary,
}));

export const ListItemIconStyled = styled(MuiListItemIcon)(({ theme }) => ({
  width: 24,
  height: 24,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '& svg': { width: '100%', height: '100%', color: 'inherit' },
}));
