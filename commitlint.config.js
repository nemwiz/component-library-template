module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'scope-empty': [2, 'never'],
        'header-max-length': [0],
        'subject-case': [2, 'never']
    }
};
