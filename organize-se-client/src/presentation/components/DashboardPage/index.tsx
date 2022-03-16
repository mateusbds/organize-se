import { Box } from '@mui/material';

import Page from '../Page';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';

type DashboardPageProps = {
  title: string;
};

const DashboardPage: React.FC<DashboardPageProps> = ({ title, children }) => {
  return (
    <Page title={title}>
      <Navbar />
      <Box component="main">
        <Sidebar />
      </Box>
    </Page>
  );
};

export default DashboardPage;
