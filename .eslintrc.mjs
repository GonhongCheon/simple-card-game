export default {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:typescript-sort-keys/recommended"
  ],
  ignorePatterns: ['dist', '.eslintrc.mjs',  "node_modules/",],
  parserOptions: {
    "project": ["./tsconfig.json"],
    "ecmaVersion": "latest",
    "parser": "@typescript-eslint/parser",
    "sourceType": "module"
  },
  plugins: [
    'react-refresh',
    "@typescript-eslint",
    "prettier",
    "simple-import-sort",
    "typescript-sort-keys",
    "sort-keys-fix",
  ],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    "react/react-in-jsx-scope": "off",
    "sort-keys-fix/sort-keys-fix": "error",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "typescript-sort-keys/interface": "error",
    "typescript-sort-keys/string-enum": "error",
    'react-hooks/exhaustive-deps': 'warn',
  },
  "settings": {
    "import/resolver": {
      "typescript": {}
    }
  }
}