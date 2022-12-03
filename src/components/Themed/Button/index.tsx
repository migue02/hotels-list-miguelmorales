import { TouchableOpacity } from 'react-native';

import { useThemeProp, TouchableOpacityProps } from '../utils';

export function Button(props: TouchableOpacityProps) {
    const { style, lightColor, darkColor, ...otherProps } = props;
    const backgroundColor = useThemeProp(
        { light: lightColor, dark: darkColor },
        'button'
    ) as string;

    return (
        <TouchableOpacity
            style={[{ backgroundColor }, style]}
            {...otherProps}
        />
    );
}
