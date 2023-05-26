const path = require('path')

const prettierCommand = (filenames) =>
    `prettier --write ${filenames.map((f) => path.relative(process.cwd(), f)).join(' ')}`

const eslintCommand = (filenames) =>
    `yarn eslint ${filenames.map((f) => path.relative(process.cwd(), f)).join(' ')}`

const checkTypescriptCommand = () =>
    `yarn check-typescript`

module.exports = {
    '*.{ts,tsx}': [prettierCommand, eslintCommand, checkTypescriptCommand],
}
