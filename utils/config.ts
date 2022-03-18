interface IAppConfig {
  baseUri: string;
}

const defaultConfig: IAppConfig = {
  baseUri: 'develop.api.com'
};
let AppConfig: IAppConfig = defaultConfig;
switch (process.env.NODE_ENV) {
  case 'development':
    AppConfig = {
      baseUri: 'develop.api.com'
    };
    break;
  case 'test':
    AppConfig = {
      baseUri: 'test.api.com'
    };
    break;
  case 'production':
    AppConfig = {
      baseUri: 'prod.api.com'
    };
    break;

  default:
    AppConfig = {
      baseUri: 'develop.api.com'
    };
    break;
}

export default AppConfig;
