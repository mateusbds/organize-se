import { Components, Theme } from '@mui/material';

export default function LoadingButton(theme: Theme): Components<Theme> {
  return {
    MuiLoadingButton: {
      styleOverrides: {
        root: {
          borderRadius: Number(theme.shape.borderRadius) * 2,
        },
      },
    },
  };
}
