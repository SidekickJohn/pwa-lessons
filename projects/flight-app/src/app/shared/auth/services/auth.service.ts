import {Injectable} from "@angular/core";
import {OAuthService} from "angular-oauth2-oidc";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor(private oAuthService: OAuthService) {
    }

    get userName(): string {
        let claims = this.oAuthService.getIdentityClaims();
        return claims ? claims['given_name'] : null;
    }

    login() {
        this.oAuthService.initImplicitFlow();
    }

    logout() {
        this.oAuthService.logOut();
    }
}
