const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require('nativewind/metro');

const config = getDefaultConfig(__dirname);

// If you need to modify the resolver, do it here on the 'config' object
// const { resolver } = config;
// resolver.sourceExts.push('cjs');

module.exports = withNativeWind(config, { input: './global.css' });