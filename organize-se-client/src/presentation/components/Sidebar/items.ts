type Item = {
  name: string;
  link: string;
  icon: string;
};

const SIDEBAR_ITEMS: Item[] = [
  {
    name: 'Início',
    link: '/',
    icon: 'majesticons:home-simple-line',
  },
  {
    name: 'Workspaces',
    link: '/workspaces',
    icon: 'majesticons:document-line',
  },
  {
    name: 'Calendário',
    link: '/calendar',
    icon: 'majesticons:calendar-line',
  },
];

export default SIDEBAR_ITEMS;
