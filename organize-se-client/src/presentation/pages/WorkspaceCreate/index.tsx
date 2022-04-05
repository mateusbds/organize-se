import { DASHBOARD_ROUTES } from '@presentation/routes';
import DashboardPage from '@presentation/components/DashboardPage';
import { Breadcrumbs } from '@presentation/components/Breadcrumbs';
import { DashboardHeader } from '@presentation/components/DashboardHeader';
import WorkspaceCreateForm from '@presentation/components/workspace/Create';

const WorkspaceCreate = () => {
  return (
    <DashboardPage title="Novo Workspace">
      <DashboardHeader>Novo Workspace</DashboardHeader>
      <Breadcrumbs
        items={[
          { label: 'Home', link: DASHBOARD_ROUTES.home },
          { label: 'Workspaces', link: DASHBOARD_ROUTES.workspaces },
          { label: 'Novo' },
        ]}
      />

      <WorkspaceCreateForm />
    </DashboardPage>
  );
};

export default WorkspaceCreate;
