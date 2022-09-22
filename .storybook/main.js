module.exports = {
    "stories": [
        "../packages/**/*.stories.mdx",
        "../packages/**/*.stories.@(js|jsx|ts|tsx)"
    ],
    "addons": [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-interactions",
        {
            name: "@storybook/addon-docs",
            options: {
                transcludeMarkdown: true
            }
        },
        'storybook-addon-themes',
    ],
    "framework": "@storybook/html",
    "core": {
        "builder": "@storybook/builder-webpack5"
    }
}