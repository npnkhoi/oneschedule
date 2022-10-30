module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true,
        "jest": true,
        "cypress/globals": true,
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "cypress",
        "@typescript-eslint"
    ],
    "rules": {
        'react/prop-types': 'off',
        'react/react-in-jsx-scope': 0,
        'no-unused-vars': 'warn',
        "cypress/no-assigning-return-values": "error",
        "cypress/no-unnecessary-waiting": "error",
        "cypress/assertion-before-screenshot": "warn",
        "cypress/no-force": "warn",
        "cypress/no-async-tests": "error",
        "@typescript-eslint/explicit-module-boundary-types": "off"
    },
    "settings": {
        react: {
            version: 'detect'
        }
    }
};
