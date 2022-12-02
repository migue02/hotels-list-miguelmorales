import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Navigation from '../navigation';
import styles from './styles';

const App = () => {
    const colorScheme = useColorScheme();

    return (
        <SafeAreaView style={styles.container}>
            <Navigation colorScheme={colorScheme} />
            <StatusBar style="auto" />
        </SafeAreaView>
    );
};

export default App;
