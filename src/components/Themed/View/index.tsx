import { View as DefaultView } from 'react-native';

import { useThemeProp, ViewProps } from '../utils';

export function View(props: ViewProps) {
    const { style, lightColor, darkColor, ...otherProps } = props;
    const backgroundColor = useThemeProp(
        { light: lightColor, dark: darkColor },
        'background'
    ) as string;

    return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}
