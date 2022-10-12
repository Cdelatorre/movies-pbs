// eslint-disable-next-line no-undef
module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 13,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: "detect", // eslint-plugin-react to automatically detect which version
    },
  },
  extends: [
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended", // Make sure this is always the last configuration in the extends array
  ],
  ignorePatterns: ["*/build", "*/node_modules", "webpack.*", "*.html"],
  rules: {
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/no-explicit-any": "error",
    "react-hooks/exhaustive-deps": "error",
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
  },
  overrides: [
    {
      files: ["**/*.stories.js"],
      rules: {
        "react/prop-types": "off",
      },
    },
  ],
  globals: {},
};
