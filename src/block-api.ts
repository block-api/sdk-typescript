import axios from "axios";
import { Response } from "./response";
import { SigninPayload, SigninResponse } from "./interface/signin.interface";

const BLOCK_API = "https://v1.blockapi.dev";

export interface BlockApiOptions {
  url?: string;
}

export class BlockApi {
  options: BlockApiOptions = {
    url: BLOCK_API,
  };

  token?: string;
  refreshToken?: string;

  constructor(options?: BlockApiOptions) {
    if (options) {
      this.options = Object.assign(this.options, options);
    }
  }

  setToken(token: string, refreshToken: string): void {
    this.token = token;
    this.refreshToken = refreshToken;
  }

  async signin(payload: SigninPayload): Promise<Response<SigninResponse>> {
    const response = new Response<SigninResponse>();
    const targetUrl = this.options.url + "/auth/login";

    try {
      const result = await axios.post(targetUrl, payload);

      response.status = result.status;
      response.body = {
        token: result.data.token,
        refreshToken: result.data.token,
      };

      return response;
    } catch(e: any) {
      const r = e.response;
      response.status = r.status;

      if (r.data?.message) {
        response.message = r.data?.message;
      }

      if (r.data?.error) {
        response.error = r.data?.error;
      }

      return response;
    }
  }
}
