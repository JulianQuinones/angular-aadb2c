import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OAuthService, NullValidationHandler } from 'angular-oauth2-oidc';
import { authConfig, DiscoveryDocumentConfig } from './auth.config';

@Component({
  selector: 'app-root',
  template: `
  <h1 *ngIf="!claims">
  Sorry, {{given_name}}!
  </h1>
  
  <h1 *ngIf="claims">
  Hi, {{given_name}}!
  </h1>
  
  <h2 *ngIf="claims">Your Claims:</h2>
  
  <pre *ngIf="claims">
  {{claims | json}}
  </pre>
  <br />
  
  <div *ngIf="!claims">
  <button (click)="login()">Login</button>
  </div>
  
  <div *ngIf="claims">
    <button (click)="logout()">Logout</button>
    <button (click)="getMessage()">API Call</button>
    <div *ngIf="message">
      Response:
      {{message | json}}
    </div>
  </div>
  `,
  styles: []
})
export class AppComponent {
  constructor(private http: HttpClient, private oauthService: OAuthService) {
    this.configure();
    this.oauthService.tryLoginImplicitFlow();
  }

  message: string;
  given_name: string;

  public getMessage() {
    this.http.get("https://localhost:44322/api/values", { responseType: 'text' })
      .subscribe(r => {
        this.message = r
        console.log("message: ", this.message);
      });
  }

  public login() {
    this.oauthService.initLoginFlow();
  }

  public logout() {
    this.oauthService.logOut();
  }

  public get claims() {
    let claims = this.oauthService.getIdentityClaims();
    console.log(claims);
    this.given_name = "No user signed in";
    if(claims){
      this.given_name = claims['given_name'];
    }
    console.log(claims);
    return claims;

  }

  private configure() {
    this.oauthService.configure(authConfig);
    this.oauthService.tokenValidationHandler = new NullValidationHandler();
    this.oauthService.loadDiscoveryDocument(DiscoveryDocumentConfig.url);
  }

}
