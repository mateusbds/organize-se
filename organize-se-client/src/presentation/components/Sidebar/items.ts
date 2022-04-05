import { DASHBOARD_ROUTES } from '@presentation/routes';

type Item = {
  name: string;
  link: string;
  icon: string;
};

const SIDEBAR_ITEMS: Item[] = [
  {
    name: 'Início',
    link: DASHBOARD_ROUTES.home,
    icon: 'majesticons:home-simple-line',
  },
  {
    name: 'Workspaces',
    link: DASHBOARD_ROUTES.workspaces,
    icon: 'majesticons:document-line',
  },
  {
    name: 'Calendário',
    link: DASHBOARD_ROUTES.calendar,
    icon: 'majesticons:calendar-line',
  },
];

export default SIDEBAR_ITEMS;
