import {defineCustomElements} from '../packages/component-library/dist/esm/loader';

defineCustomElements();

export const parameters = {
    actions: {argTypesRegex: "^on[A-Z].*"},
    previewTabs: {'storybook/docs/panel': {index: -1}},
    viewMode: 'docs',
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    backgrounds: {
        disable: true,
        values: []
    },
    themes: {
        default: 'light',
        clearable: false,
        list: [
            {name: 'light', class: 'theme-light', color: '#fff'},
            {name: 'dark', class: 'theme-dark', color: '#121212'}
        ],
    }
}