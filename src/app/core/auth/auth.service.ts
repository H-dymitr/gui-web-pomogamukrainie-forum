import { Injectable } from '@angular/core';
import { AuthConfig, OAuthService } from 'angular-oauth2-oidc';
import { environment } from 'src/environments/environment';
import { AuthSessionStorageKeys } from './model';

@Injectable()
export class AuthService {
  constructor(protected readonly oAuthService: OAuthService) {}

  public initAuth(): Promise<boolean> {
    this.oAuthService.configure(this.createAuthConfig());
    return this.oAuthService.loadDiscoveryDocumentAndTryLogin();
  }

  /**
   * this is a workaround with sessionStorage
   * dynamic redirect to a specific url, this library probably has a bug
   */
  public login(url: string): void {
    sessionStorage.setItem(AuthSessionStorageKeys.CUSTOM_REDIRECT_URI, environment.authConfig.redirectUri + url);
    this.oAuthService.redirectUri = sessionStorage.getItem(AuthSessionStorageKeys.CUSTOM_REDIRECT_URI) + '';
    this.oAuthService.initCodeFlow();
  }

  public updateProfile(): void {
    this.oAuthService.initCodeFlow(undefined, { kc_action: 'UPDATE_PROFILE' });
  }

  public logOut(): void {
    this.oAuthService.postLogoutRedirectUri = environment.authConfig.redirectUri;
    this.oAuthService.logOut();
  }

  public isLoggedIn(): boolean {
    return this.oAuthService.hasValidAccessToken() && this.oAuthService.hasValidIdToken();
  }

  private createAuthConfig(): AuthConfig {
    return {
      issuer: environment.authConfig.issuer,
      redirectUri:
        sessionStorage.getItem(AuthSessionStorageKeys.CUSTOM_REDIRECT_URI) + '' || environment.authConfig.redirectUri,
      clientId: 'ogloszenia-fe',
      responseType: 'code',
      showDebugInformation: environment.authConfig.showDebugInformation,
    };
  }
}
