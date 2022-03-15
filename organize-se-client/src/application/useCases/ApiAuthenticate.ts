import { inject, injectable } from "inversify";

import { Authenticate } from "@domain/useCases/Authenticate";
import {
  HttpPostClient,
  HttpPostClientToken,
} from "@application/definitions/http/HttpPostClient";

@injectable()
export class ApiAuthenticate implements Authenticate {
  constructor(
    @inject(HttpPostClientToken) private readonly httpPostClient: HttpPostClient
  ) {}

  async handle(params: Authenticate.Params): Promise<Authenticate.Result> {
    const { url, email, password } = params;
    const result = await this.httpPostClient.post<
      Omit<Authenticate.Params, "url">,
      Authenticate.Result
    >({
      body: {
        email,
        password,
      },
      url,
    });
    return result;
  }
}
