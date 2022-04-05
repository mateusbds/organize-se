import { Box, styled } from '@mui/material';

import { NAVBAR_HEIGHT } from '../Navbar/styled';

export const Content = styled(Box)(({ theme }) => ({
  paddingTop: NAVBAR_HEIGHT,
  paddingRight: theme.spacing(5),
  paddingLeft: theme.spacing(5),
  flex: 1,
  overflow: 'hidden',
}));
