export interface HttpPostClient {
  post<Body, T>(
    params: HttpPostClient.Params<Body>
  ): Promise<HttpPostClient.Result<T>>;
}

export const HttpPostClientToken = Symbol("HttpPostClient");

export namespace HttpPostClient {
  export interface Params<Body> {
    url: string;
    body: Body;
  }
  export type Result<T> = T;
}
