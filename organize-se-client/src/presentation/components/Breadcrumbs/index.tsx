import NextLink from 'next/link';
import { Breadcrumbs as MuiBreadcrumbs, Link, Typography } from '@mui/material';

interface BreadcrumbsProps {
  items: {
    link?: string;
    label: string;
  }[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <MuiBreadcrumbs aria-label="breadcrumb">
      {items.map(({ link, label }) => {
        if (link) {
          return (
            <Typography key={label} variant="subtitle2" color="text.primary">
              <NextLink href={link} passHref>
                <Link underline="hover" color="inherit">
                  {label}
                </Link>
              </NextLink>
            </Typography>
          );
        }
        return (
          <Typography key={label} variant="subtitle2">
            {label}
          </Typography>
        );
      })}

      {/* <Typography variant="subtitle2" color="text.primary">
        <NextLink href="/" passHref>
          <Link underline="hover" color="inherit" href="/getting-started/installation/">
            Core
          </Link>
        </NextLink>
      </Typography>
      <Typography variant="subtitle2">MuiBreadcrumbs</Typography> */}
    </MuiBreadcrumbs>
  );
};
