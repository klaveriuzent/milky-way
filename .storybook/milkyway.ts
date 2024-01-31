import { create } from '@storybook/theming/create';

export default create({
    //Theme
    base: 'light',
    brandTitle: 'MilkyWay Storybook',
    brandUrl: 'https://storybook.js.org/images/placeholders/350x150.png',
    brandImage: './public/milkyway-logo.svg',
    brandTarget: '_self',

    // Typography
    fontBase: '"Roboto", sans-serif',
    fontCode: 'Orbitron, monospace',

    //
    colorPrimary: '#3A10E5',
    colorSecondary: '#212233',
});

// Refrence
// https://storybook.js.org/docs/configure/theming