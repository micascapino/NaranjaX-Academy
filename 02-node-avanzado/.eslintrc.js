module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es2021: true
    },
    extends: [
        "standard"
    ],

    parserOptions: {
        ecmaVersion: 12
    },
    plugins: [
        "@typescript-eslint"
    ],
    rules: {
        semi: ["error", "always"],
        quotes: ["error", "double"],
        indent: ["error", 4]
    }
};
