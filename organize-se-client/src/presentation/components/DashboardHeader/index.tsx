import { Typography, TypographyProps } from '@mui/material';

type DashboardHeaderProps = TypographyProps;

export const DashboardHeader: React.FC<DashboardHeaderProps> = ({ children, ...props }) => {
  return (
    <Typography sx={{ mb: 2 }} variant="h3" {...props}>
      {children}
    </Typography>
  );
};
