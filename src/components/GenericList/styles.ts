import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'column',
    },
    arrow: {
        position: 'absolute',
        height: '100%',
        width: 32,
        backgroundColor: 'transparent',
    },
    right: {
        right: 0,
    },
    outerIcon: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent',
    },
    icon: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 24,
        height: 48,
        margin: 2,
        backgroundColor: '#00000044',
    },
});

export default styles;
