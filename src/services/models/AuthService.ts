import LoginRequest from "../../contracts/authContracts/LoginRequest";
import LoginResponse from "../../contracts/authContracts/LoginResponse";
import RegisterRequest from "../../contracts/authContracts/RegisterRequest";
import { AccessModify, ServerNames } from "../HttpClientService";
import BaseService from "./BaseService"

export default class AuthService extends BaseService{
    controller:string = "Auth";

    async Login(loginRequst: Partial<LoginRequest>): Promise<LoginResponse>{

        const promiseResponse : LoginResponse = await this.httpClientServices
        .postAsync<LoginRequest, LoginResponse>(
            {
                action: "Login",
                controller: this.controller,
                serverName: ServerNames.AuthServer,
                accessModify : AccessModify.Public,
            },
            loginRequst
        );
        
        return promiseResponse;
    }

    async Register(registerRequest: Partial<RegisterRequest>): Promise<void>{

        await this.httpClientServices
        .postAsync<RegisterRequest, any>(
            {
                action: "Register",
                controller: this.controller,
                serverName: ServerNames.AuthServer,
                accessModify : AccessModify.Public,
            },
            registerRequest
        );
    }

}