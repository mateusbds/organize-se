import { Container } from "inversify";

import { infraDependencies } from "@infra/dependencies";
import { applicationDependencies } from "@application/dependencies";

import { DependenceDictionary } from "./types";

const container = new Container();
const dependencies: DependenceDictionary[] = [
  ...applicationDependencies,
  ...infraDependencies,
];
for (const dependency of dependencies) {
  container.bind(dependency.token).to(dependency.implementation);
}

export default container;
