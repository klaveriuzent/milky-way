import { create } from '@storybook/theming/create';

export default create({
    base: 'light',
    brandTitle: 'MilkyWay Storybook',
    brandUrl: 'https://storybook.js.org/images/placeholders/350x150.png',
    brandImage: 'https://storybook.js.org/images/placeholders/350x150.png',
    brandTarget: '_self',

    // Typography
    fontBase: '"Roboto", sans-serif',
    fontCode: 'Orbitron, monospace',

    colorPrimary: '#3A10E5',
    colorSecondary: '#585C6D',

});

// Refrence
// https://storybook.js.org/docs/configure/theming