import antfu from '@antfu/eslint-config';

export default antfu({
  type: 'app',
  formatters: true,
  typescript: true,

  stylistic: {
    indent: 2,
    semi: true,
    qoutes: 'double',
  },

}, {
  rules: {
    'no-console': ['warn'],
    'antfu/no-top-level-await': ['off'],
    'node/prefer-global/process': ['off'],

    'perfectionist/sort-imports': ['error', {
      internalPattern: ['\'^@/.+\''],
    }],
  },
});
