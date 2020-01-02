module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/essential"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "vue"
    ],
    "rules": {
        "rules": {
            "no-console": 0,
            "indent": [
                4,
                "tab"
            ],
            "quotes": [
                2,
                "single"
            ],
            "linebreak-style": [
                2,
                "unix"
            ],
            "semi": [
                2,
                "always"
            ]
        },
        "env": {
            "browser": true,
            "node": true
        },
    }
};