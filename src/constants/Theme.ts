const buttonColorLight = '#2f95dc';
const buttonColorDark = '#fff';

type Theme = {
    text: string;
    background: string;
    button: string;
};

const LightTheme: Theme = {
    text: '#000',
    background: '#fff',
    button: buttonColorLight,
};

const DarkTheme: Theme = {
    text: '#fff',
    background: '#000',
    button: buttonColorDark,
};

export default {
    light: LightTheme,
    dark: DarkTheme,
};
