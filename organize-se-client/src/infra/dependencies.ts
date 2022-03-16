import { DependenceDictionary } from '@main/container/types';
import { HttpPostClientToken } from '@application/definitions/http/HttpPostClient';

import { AxiosAdapter } from './http/AxiosAdapter';

export const infraDependencies: DependenceDictionary[] = [
  {
    token: HttpPostClientToken,
    implementation: AxiosAdapter,
  },
];
