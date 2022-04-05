import { alpha, Components, Theme } from '@mui/material';

export default function Table(theme: Theme): Components<Theme> {
  const isLight = theme.palette.mode === 'light';

  return {
    MuiTableRow: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            backgroundColor: theme.palette.action.selected,
            '&:hover': {
              backgroundColor: theme.palette.action.hover,
            },
          },
          '&:hover': {
            backgroundColor: theme.palette.action.hover,
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: 'none',
        },
        head: {
          color: theme.palette.text.secondary,
          backgroundColor: isLight ? theme.palette.grey[200] : alpha(theme.palette.grey[500], 0.08),
          '&:first-of-type': {
            paddingLeft: theme.spacing(3),
            borderTopLeftRadius: theme.shape.borderRadius,
            borderBottomLeftRadius: theme.shape.borderRadius,
          },
          '&:last-of-type': {
            paddingRight: theme.spacing(3),
            borderTopRightRadius: theme.shape.borderRadius,
            borderBottomRightRadius: theme.shape.borderRadius,
          },
        },
        stickyHeader: {
          backgroundColor: theme.palette.background.paper,
          backgroundImage: `linear-gradient(to bottom, ${
            isLight ? theme.palette.grey[200] : alpha(theme.palette.grey[500], 0.08)
          } 0%, ${isLight ? theme.palette.grey[200] : alpha(theme.palette.grey[500], 0.08)} 100%)`,
        },
        body: {
          '&:first-of-type': {
            paddingLeft: theme.spacing(3),
          },
          '&:last-of-type': {
            paddingRight: theme.spacing(3),
          },
        },
      },
    },
  };
}
