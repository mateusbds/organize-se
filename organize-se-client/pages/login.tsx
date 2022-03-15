import type { NextPage } from 'next';

import { makeLogin } from '@main/factories/pages/loginFactory';

const LoginPage: NextPage = () => {
  return makeLogin();
};

export default LoginPage;
