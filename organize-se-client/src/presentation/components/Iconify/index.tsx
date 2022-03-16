import { Icon, IconProps } from '@iconify/react';
import { Box, BoxProps } from '@mui/material';

type IconifyProps = BoxProps & IconProps;

const Iconify = ({ icon, sx, ...other }: IconifyProps) => {
  return <Box component={Icon} icon={icon} sx={{ ...sx }} {...other} />;
};

export default Iconify;
