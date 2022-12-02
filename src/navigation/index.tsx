import {
    DarkTheme,
    DefaultTheme,
    NavigationContainer,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Hotels from '../pages/Hotels';
import { NavigationProps, RootStackParamList } from './types';
import { FC } from 'react';
import { View } from '../components/Themed';
import styles from './styles';

const Navigation: FC<NavigationProps> = function ({ colorScheme }) {
    return (
        <View style={styles.container}>
            <NavigationContainer
                theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
            >
                <RootNavigator />
            </NavigationContainer>
        </View>
    );
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Group>
                <Stack.Screen
                    name="Hotels"
                    component={Hotels}
                    options={{ headerShown: false }}
                />
            </Stack.Group>
        </Stack.Navigator>
    );
}

export default Navigation;
