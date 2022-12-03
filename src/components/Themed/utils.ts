import { Text, TouchableOpacity, useColorScheme, View } from 'react-native';

import Colors from '../../constants/Theme';

type ThemeProps = {
    lightColor?: string;
    darkColor?: string;
};

export type ViewProps = ThemeProps & View['props'];
export type TextProps = ThemeProps & Text['props'];
export type TouchableOpacityProps = ThemeProps & TouchableOpacity['props'];

export function useThemeProp(
    props: { light?: string; dark?: string },
    prop: keyof typeof Colors.light
) {
    const theme = useColorScheme() || 'light';
    const colorFromProps = props[theme];

    if (colorFromProps) {
        return colorFromProps;
    } else {
        return Colors[theme][prop];
    }
}
