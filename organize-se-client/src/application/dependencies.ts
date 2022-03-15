import { ContainerDictionary } from "@main/container/types";
import { AuthenticateToken } from "@domain/useCases/Authenticate";

import { ApiAuthenticate } from "./useCases/ApiAuthenticate";

export const applicationDependencies: ContainerDictionary[] = [
  {
    token: AuthenticateToken,
    implementation: ApiAuthenticate,
  },
];
