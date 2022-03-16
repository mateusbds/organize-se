import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Divider, IconButton, List, ListItemText, Stack, Typography, useTheme } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import Iconify from '../Iconify';
// import Scrollbar from '../Scrollbar';
import UnstyledLink from '../UnstyledLink';

import { Drawer, DrawerHeader, ListItemButtonStyled, ListItemIconStyled } from './styled';
import SIDEBAR_ITEMS from './items';

interface ListItemButtonProps {
  href: string;
}

export function getActive(path: string, pathname: string, asPath: string) {
  return pathname.includes(path) || asPath.includes(path);
}

const ListItemButton: React.FC<ListItemButtonProps> = ({ href, children }) => {
  const { pathname, asPath } = useRouter();

  return (
    <Link passHref href={href}>
      <UnstyledLink>
        <ListItemButtonStyled selected={getActive(href, pathname, asPath)}>{children}</ListItemButtonStyled>
      </UnstyledLink>
    </Link>
  );
};

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <Drawer variant="permanent" open={open}>
      <DrawerHeader>
        {open && (
          <Typography sx={{ m: 'auto' }} variant="h3">
            Organize-se
          </Typography>
        )}
        <IconButton onClick={() => setOpen((prev) => !prev)}>
          {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
      </DrawerHeader>
      <Divider />
      {/* <Scrollbar> */}
      <Stack sx={{ p: 1 }}>
        <List>
          {SIDEBAR_ITEMS.map((item) => (
            <ListItemButton href={item.link} key={item.name}>
              <ListItemIconStyled>
                <Iconify icon={item.icon} />
              </ListItemIconStyled>
              <ListItemText disableTypography primary={item.name} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          ))}
        </List>
      </Stack>
      {/* </Scrollbar> */}
    </Drawer>
  );
};

export default Sidebar;
