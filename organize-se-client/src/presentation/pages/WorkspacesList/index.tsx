import { Breadcrumbs } from '@presentation/components/Breadcrumbs';
import DashboardPage from '@presentation/components/DashboardPage';
import { WorkspaceList } from '@presentation/components/workspace/List';
import { DashboardHeader } from '@presentation/components/DashboardHeader';

type WorkspacesListPageProps = {
  workspaces: any[];
};

const WorkspacesListPage: React.FC<WorkspacesListPageProps> = ({ workspaces }) => {
  return (
    <DashboardPage title="Workspaces">
      <DashboardHeader>Workspaces</DashboardHeader>
      <Breadcrumbs items={[{ label: 'Home', link: '/' }, { label: 'Workspaces' }]} />

      <WorkspaceList workspaces={workspaces} />
    </DashboardPage>
  );
};

export default WorkspacesListPage;
