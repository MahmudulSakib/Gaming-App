/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  extends: [
    "next",
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  rules: {
    "@typescript-eslint/no-explicit-any": "off",
    "@next/next/no-img-element": "off",
    "jsx-a11y/alt-text": "off",
  },
};
