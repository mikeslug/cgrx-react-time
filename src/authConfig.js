export const msalConfig = {
  auth: {
    clientId: "f775fc69-3b9b-4680-9431-806dfecca948",
    authority:
      "https://login.microsoftonline.com/743127a4-099a-45da-9160-47b014d740b9",
    redirectUri: "https://mikeslug.github.io/cgrx-react-time/",
  },
  cache: {
    cacheLocation: "sessionStorage", // This configures where your cache will be stored
    storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
  },
};

// Add scopes here for ID token to be used at Microsoft identity platform endpoints.
export const loginRequest = {
  scopes: ["User.Read"],
};

// Add the endpoints here for Microsoft Graph API services you'd like to use.
export const graphConfig = {
  graphMeEndpoint: "https://graph.microsoft.com/v1.0/me",
  graphProfileEndpoint: "https://graph.microsoft.com/beta/me/profile",
  graphMgrEndpoint: "https://graph.microsoft.com/v1.0/me/manager",
};
