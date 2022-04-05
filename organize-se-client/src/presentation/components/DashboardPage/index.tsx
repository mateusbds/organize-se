import { useState } from 'react';
import { Box } from '@mui/material';

import Page from '../Page';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';

import { Content } from './styled';

type DashboardPageProps = {
  title: string;
};

const DashboardPage: React.FC<DashboardPageProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Page title={title}>
      <Navbar isCollapsed={!isOpen} />
      <Box component="main" overflow="hidden" display="flex" flex="1" width="100%">
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
        <Content>{children}</Content>
      </Box>
    </Page>
  );
};

export default DashboardPage;
