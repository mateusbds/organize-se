import { Components, Theme } from '@mui/material';

export default function List(theme: Theme): Components<Theme> {
  return {
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          minWidth: 'auto',
          marginRight: theme.spacing(2),
          color: 'inherit',
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: Number(theme.shape.borderRadius) * 2,
        },
      },
    },
  };
}
