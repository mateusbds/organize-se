import {
  CSSObject,
  Drawer as MuiDrawer,
  ListItemButton as MuiListItemButton,
  ListItemIcon as MuiListItemIcon,
  styled,
  Theme,
} from '@mui/material';

export const DRAWER_WIDTH_OPEN = 280;
export const DRAWER_WIDTH_COLLAPSED = 64;

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
  // width: `calc(${theme.spacing(7)} + 1px)`,
  // [theme.breakpoints.up('sm')]: {
  //   width: `calc(${theme.spacing(8)} + 1px)`,
  // },
});

export const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
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
  padding: '8px 12px',
  ...theme.typography.subtitle2,
  color: selected ? theme.palette.primary.main : theme.palette.text.primary,
}));

export const ListItemIconStyled = styled(MuiListItemIcon)({
  width: 22,
  height: 22,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '& svg': { width: '100%', height: '100%' },
});
