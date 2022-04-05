import container from '@main/container';
import LoginPage from '@presentation/pages/Login';
import { Authenticate, AuthenticateToken } from '@domain/useCases/Authenticate';

const authenticate = container.get<Authenticate>(AuthenticateToken);

const makeLoginPage = () => {
  return <LoginPage authenticate={authenticate} />;
};

export default makeLoginPage;
