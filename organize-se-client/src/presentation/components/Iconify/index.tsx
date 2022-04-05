import { Icon, IconProps } from '@iconify/react';
import { Box, BoxProps, useTheme } from '@mui/material';

type IconifyProps = BoxProps & IconProps;

const Iconify = ({ icon, sx, ...other }: IconifyProps) => {
  const theme = useTheme();

  return <Box component={Icon} icon={icon} sx={{ ...sx, color: theme.palette.text.secondary }} {...other} />;
};

export default Iconify;
