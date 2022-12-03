import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'react-native';

import { View } from '../components/Themed';
import Navigation from '../navigation';
import styles from './styles';

const App = () => {
    const colorScheme = useColorScheme();

    return (
        <View style={styles.container}>
            <Navigation colorScheme={colorScheme} />
            <StatusBar style="auto" />
        </View>
    );
};

export default App;
