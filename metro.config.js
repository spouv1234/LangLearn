const { getDefaultConfig } = require('@expo/metro-config');

const config = getDefaultConfig(__dirname);

// Add any custom configuration here
config.resolver.sourceExts.push('mjs');

module.exports = config; 