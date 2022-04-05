import type { NextPage } from 'next';

import makeLoginPage from '@main/factories/pages/makeLogin';

const LoginPage: NextPage = () => {
  return makeLoginPage();
};

export default LoginPage;
