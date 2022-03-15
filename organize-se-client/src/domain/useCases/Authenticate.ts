export interface Authenticate {
  handle(params: Authenticate.Params): Promise<Authenticate.Result>;
}

export const AuthenticateToken = Symbol("AuthenticateToken");

export namespace Authenticate {
  export interface Params {
    url: string;
    email: string;
    password: string;
  }
  export type Result = string;
}
