export interface Config {
  NODE_ENV: 'development' | 'production';
  APP_PORT: number;

  DATABASE_URL: string;
}
