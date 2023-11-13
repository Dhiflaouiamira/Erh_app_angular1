import { User } from "./user";

export class AuthResponse {
    jwt: string = "";
    user: User = new User();
    token: string = "";
    id: string = "";
    role: string = "";
    username: string = "";
    fullName: string = "";
}