module.exports = {
    extends: [
        'universe',
        'universe/shared/typescript-analysis',
        'plugin:react-hooks/recommended',
        'plugin:testing-library/react',
    ],
    overrides: [
        {
            files: ['*.ts', '*.tsx', '*.d.ts'],
            parserOptions: {
                project: './tsconfig.json',
            },
        },
    ],
    settings: {
        'import/resolver': {
            typescript: {},
        },
    },
    globals: {
        __dirname: true,
    },
    plugins: ['jest', 'testing-library'],
}
