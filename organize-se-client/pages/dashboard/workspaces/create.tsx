import type { NextPage } from 'next';

import makeWorkspacesCreatePage from '@main/factories/pages/makeWorkspaceCreate';

const WorkspacesCreatePage: NextPage = () => {
  return makeWorkspacesCreatePage();
};

export default WorkspacesCreatePage;
