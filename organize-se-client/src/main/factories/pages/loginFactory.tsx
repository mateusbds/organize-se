import container from "@main/container";
import Login from "@presentation/pages/Login";
import { Authenticate, AuthenticateToken } from "@domain/useCases/Authenticate";

const authenticate = container.get<Authenticate>(AuthenticateToken);

export const makeLogin = () => {
  return <Login authenticate={authenticate} />;
};
