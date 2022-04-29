module.exports = {
  "extends": "airbnb",
  "parser": "@babel/eslint-parser",
  "parserOptions": {
    "ecmaVersion": 2017,
    "sourceType": "module",
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "impliedStrict": true,
      "globalReturn": false,
      "jsx": true
    }
  },
  "rules": {
    "comma-dangle": 1,
    "no-param-reassign": [1, { "props": false }],
    "arrow-parens": 0,
    "import/extensions": "off",
    "import/no-unresolved": "off",
    "no-plusplus": 0,
    "no-console": 0,
    "no-confusing-arrow": 0,
    "import/no-extraneous-dependencies": 0,
    "no-trailing-spaces": [2, { "skipBlankLines": true }],
    "react/forbid-prop-types": 0,
    "no-unused-expressions": [1, { "allowTernary": true }],
    "max-len": [
      2,
      {
        "code": 120,
        "ignoreStrings": true,
        "ignoreTemplateLiterals": true
      }
    ],
    "operator-linebreak": 0,
    "implicit-arrow-linebreaks": 0,

    /* React */
    "react/require-extension": "off",
    "react/prefer-stateless-function": "off",
    "react/no-array-index-key": 0,
    "react/destructuring-assignment": 0,
    "react/require-default-props": 0
  },
  "globals": {
    "$": true,
    "document": true,
    "window": true,
    "navigator": true,
    "localStorage": true,
    "jQuery": true,
    "location": true,
    "fetch": true,
    "Event": true,
    "Invoca": true,
  },
  "env": {
    "jest": true
  }
}
