const {
    override,
    addDecoratorsLegacy
} = require('customize-cra')

const path = require('path')

const resolve = (dir) => {
    return path.join(__dirname, dir)
}

const cusomize = () => (config, env) => {
    config.resolve.alias['@'] = resolve('src')
    return config
}

module.exports = override(addDecoratorsLegacy(), cusomize())