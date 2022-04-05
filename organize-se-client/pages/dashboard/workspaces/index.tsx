import type { NextPage } from 'next';

import makeWorkspacesListPage from '@main/factories/pages/makeWorkspacesList';

const WorkspacesListPage: NextPage = () => {
  return makeWorkspacesListPage();
};

export default WorkspacesListPage;
