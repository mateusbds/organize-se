import type { NextPage } from 'next';

import makeHomePage from '@main/factories/pages/makeHome';

const HomePage: NextPage = () => {
  return makeHomePage();
};

export default HomePage;
