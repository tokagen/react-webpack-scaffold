module.exports = {
  "env": {
    "es6": true,
    "browser": true,
    "jest": true,
    "node": true
  },
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "extends": "eslint:recommended",
  "globals": {
    "__base": true
  },
  "rules": {
    "no-console": 0,
    "no-multiple-empty-lines": [2, {"max": 2, "maxEOF": 0, "maxBOF": 0 }],
    "no-unused-vars": 0,
    "indent": [
      "error",
      2
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "quotes": [
      "error",
      "single"
    ],
    "semi": [
      "error",
      "always"
    ]
  }
};
