let baseUrl = '';

switch (process.env.NODE_ENV) {
    case "development":
        baseUrl = process.env.REACT_APP_DEV_BASEURL!;
        break;
    case "test":
        break;
    case "production":
        baseUrl = process.env.REACT_APP_PROD_BASEURL!;
        break;
    default: break;

}

let loginEndPoint = `${baseUrl}api/Authentication/login`;

export const apiEndPoint = {
    baseUrl,
    loginEndPoint
}