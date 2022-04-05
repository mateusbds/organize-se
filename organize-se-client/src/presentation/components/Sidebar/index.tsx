import { Dispatch, SetStateAction, useState } from 'react';
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

interface GetActiveParams {
  path: string;
  pathname: string;
  asPath: string;
  exact?: boolean;
}

export function getActive({ path, pathname, asPath, exact }: GetActiveParams): boolean {
  if (exact) {
    return pathname === path;
  }
  return pathname.includes(path) || asPath.includes(path);
}

const ListItemButton: React.FC<ListItemButtonProps> = ({ href, children }) => {
  const { pathname, asPath } = useRouter();

  return (
    <Link passHref href={href}>
      <UnstyledLink>
        <ListItemButtonStyled selected={getActive({ path: href, pathname, asPath, exact: true })}>
          {children}
        </ListItemButtonStyled>
      </UnstyledLink>
    </Link>
  );
};

type SidebarProps = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen }) => {
  return (
    <Drawer
      variant="permanent"
      open={isOpen}
      PaperProps={{ sx: { bgcolor: 'background.default', borderRightStyle: 'dashed' } }}
    >
      <DrawerHeader>
        {isOpen && (
          <Typography sx={{ m: 'auto' }} variant="h3">
            Organize-se
          </Typography>
        )}
        <IconButton onClick={() => setIsOpen((prev) => !prev)}>
          {isOpen ? <ChevronLeftIcon /> : <ChevronRightIcon />}
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
              {<ListItemText disableTypography primary={item.name} sx={{ opacity: isOpen ? 1 : 0 }} />}
            </ListItemButton>
          ))}
        </List>
      </Stack>
      {/* </Scrollbar> */}
    </Drawer>
  );
};

export default Sidebar;
