import { WalletNetwork } from "../enum/wallet-network";
export interface SigninPayload {
    usernameOrEmail?: string;
    password?: string;
    walletAddress?: string;
    walletNetwork?: WalletNetwork;
}
export interface SigninResponse {
    token: string;
    refreshToken: string;
}
