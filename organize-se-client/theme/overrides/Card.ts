import { Components, Theme } from '@mui/material';

export default function Card(theme: Theme): Components<Theme> {
  return {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: theme.customShadows?.card,
          borderRadius: Number(theme.shape.borderRadius) * 4,
        },
      },
    },
  };
}
