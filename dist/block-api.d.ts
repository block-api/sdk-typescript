import { Response } from "./response";
import { SigninPayload, SigninResponse } from "./interface/signin.interface";
export interface BlockApiOptions {
    url?: string;
}
export declare class BlockApi {
    options: BlockApiOptions;
    token?: string;
    refreshToken?: string;
    constructor(options?: BlockApiOptions);
    setToken(token: string, refreshToken: string): void;
    signin(payload: SigninPayload): Promise<Response<SigninResponse>>;
}
