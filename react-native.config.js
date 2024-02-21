module.exports = {
    project: {
        ios: {},
        android: {},
    },
    getTransformModulePath() {
        return require.resolve('react-native-typescript-transformer');
    },
    assets: ['./assets/fonts'],
    getSourceExts() {
        return ['ts', 'tsx'];
    },
};
