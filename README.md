## Node + Express Application Starter Template

### How to run this template

```
# Clone first
  git clone ...

# cd into the project folder then run
  pnpm install

# Running the app
  pnpm dev

# Lintingh
  pnpm lint

# Lint then Fix
  pnpm lint:fix

# Building
  pnpm build

```

### This is a starter template which includes the following:

  #### Middlewares
  - OpenApi (API documentation)
  - Pino (for logging request)
  - Not Found Route Fallback
  - Extendable Global Error Handler
  - Emoji to Favicon

### ENV Variables

```
NODE_ENV=
PORT=
LOG_LEVEL=
```

#### Note: 
Accessing env variable through process.env will flag as error. You must access env variables through the provided type safe configuration

```
#Example

import env from '../env';
const port = env.PORT

```
