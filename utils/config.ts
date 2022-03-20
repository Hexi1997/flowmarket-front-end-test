interface IAppConfig {
  baseUri: string;
}

const defaultConfig: IAppConfig = {
  baseUri: 'dev.api.com'
};

let AppConfig: IAppConfig = defaultConfig;

switch (process.env.NODE_ENV) {
  case 'development':
    AppConfig = defaultConfig;
    break;
  case 'test':
    AppConfig = {
      baseUri: 'staging.api.com'
    };
    break;
  case 'production':
    AppConfig = {
      baseUri: 'prod.api.com'
    };
    break;

  default:
    break;
}

export default AppConfig;
