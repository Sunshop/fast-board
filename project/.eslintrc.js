module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb-typescript',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  plugins: ['@typescript-eslint'],
  parserOptions: {
    project: './tsconfig.json',
  },
  env:{                         
    browser: true,
    node: true,
  },
  rules: {
    "import/prefer-default-export": "off",
    "no-console": process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "jsx-a11y/no-static-element-interactions": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/mouse-events-have-key-events": "off",
    "max-len": ["error", { "code": 300 }],
  },
};
