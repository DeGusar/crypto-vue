module.exports = {
  root: true,
  env: {
    node: true,
  },
  plugins: ["import"],
  extends: [
    "eslint:recommended",
    "plugin:vue/essential",
    "plugin:prettier/recommended",
  ],
};
