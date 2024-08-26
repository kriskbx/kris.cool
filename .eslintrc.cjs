module.exports = {
    root: true,
    plugins: ['prettier'],
    extends: ['@nuxt/eslint-config', 'prettier'],
    rules: {
        'prettier/prettier': 2,
        'vue/multi-word-component-names': 'off',
    },
};
