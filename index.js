module.exports = {
  parser: "babel-eslint",

  parserOptions: {
    ecmaVersion: 7,
    sourceType: "module",
    ecmaFeatures: {
      impliedStrict: true,
      jsx: true,
      generators: true,
    },
  },

  plugins: [
    "react",
    "import",
  ],

  env: {
    es6: true,
    browser: true,
    node: true,
    mocha: true,
    jasmine: false,
    amd: false,
  },

  settings: {
    "import/resolver": {
      node: {
        paths: ["./src/"],
        extensions: [".js", ".jsx", ".json"],
      },
    },
  },

  "globals": {
    // No globals... yet.
  },

  rules: [
    "best-practices",
    "errors",
    "node",
    "style",
    "variables",
    "es6",
    "imports",
    "strict",
    "react",
  ].map(function(ruleFile) { return require("./rules/" + ruleFile); }).
    reduce(function(rules, ruleSet) { Object.assign(rules, ruleSet); return rules; }, {})
};
