import { AuthConfig } from 'angular-oauth2-oidc';

export const DiscoveryDocumentConfig = {
  url : "https://julianqgb2c.b2clogin.com/julianqgb2c.onmicrosoft.com/v2.0/.well-known/openid-configuration?p=b2c_1_signup_signin_1"
}

export const authConfig: AuthConfig = {
  redirectUri: window.location.origin + '/index.html',
  responseType: 'token id_token',
  issuer: 'https://julianqgb2c.b2clogin.com/41a81f97-bae7-4177-9e99-257375f6ef19/v2.0/',
  strictDiscoveryDocumentValidation: false,
  tokenEndpoint: 'https://julianqgb2c.b2clogin.com/julianqgb2c.onmicrosoft.com/oauth2/v2.0/token?p=b2c_1_signup_signin_1',
  loginUrl: 'https://julianqgb2c.b2clogin.com/julianqgb2c.onmicrosoft.com/oauth2/v2.0/token?p=b2c_1_signup_signin_1',
  clientId: 'b98aa0f0-7888-43d6-8e2c-0ab74c407c61',
  scope: 'openid profile https://julianqgb2c.onmicrosoft.com/api/demo.read',
  skipIssuerCheck: true,
  clearHashAfterLogin: true,
  oidc: true,
}
 