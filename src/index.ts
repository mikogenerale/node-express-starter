import app from './app';
import env from './env';

app.listen(env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`App is running at url: http://localhost:${env.PORT}`);
});
