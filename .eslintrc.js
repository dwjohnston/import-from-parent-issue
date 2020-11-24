module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended", 
        'plugin:import/typescript'

    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint", 
        "eslint-plugin-import"
    ],
    "rules": {
        "@typescript-eslint/explicit-module-boundary-types": "off", 
        // "import/no-relative-parent-imports": "error", 
        "import/no-cycle": "error", 
        // "import/no-internal-modules": [ "error", {
        //     "allow": [ "**/actions/*", "source-map-support/*" ]
        //   } ],

        "import/no-default-export": "error"
    }
};
