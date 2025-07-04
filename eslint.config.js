const base = require('@ton/toolchain');
const tsEslint = require('@ton/toolchain').tsEslint;

module.exports = [
    ...base,
    { ignores: ['data/**'] },
    {
        plugins: {
            '@typescript-eslint': tsEslint,
        },
        rules: {
            'no-console': 'off',
        },
    },
];
