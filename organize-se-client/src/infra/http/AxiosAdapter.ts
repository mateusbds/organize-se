import { injectable } from "inversify";

import axios from "@infra/utils/axios";
import { HttpPostClient } from "@application/definitions/http/HttpPostClient";

@injectable()
export class AxiosAdapter implements HttpPostClient {
  async post<Body, T>(params: HttpPostClient.Params<Body>): Promise<T> {
    const { body, url } = params;
    const { data } = await axios.post<T>(url, body);
    return data;
  }
}
