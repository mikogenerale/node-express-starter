import type { ZodError } from 'zod';

import { z } from 'zod';

const EnvSchema = z.object({
  NODE_ENV: z.string().default('development'),
  PORT: z.coerce.number().default(3000),
  LOG_LEVEL: z.enum(['fatal', 'error', 'warn', 'info', 'debug']),
});

export type EnvType = z.infer<typeof EnvSchema>;

// eslint-disable-next-line import/no-mutable-exports
let env: EnvType;

try {
  env = EnvSchema.parse(process.env);
}
catch (e) {
  const error = e as ZodError;
  console.error('Invalid env: ');
  console.error(error.flatten().fieldErrors);
  process.exit(1);
}

export default env;
