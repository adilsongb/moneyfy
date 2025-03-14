module.exports = {
  extends: ["expo", "prettier"],
  plugins: ["prettier"],
  settings: {
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
  rules: {
    "prettier/prettier": "error",
    "react-hooks/exhaustive-deps": "off",
  },
  ignorePatterns: ["/dist/*"],
};
