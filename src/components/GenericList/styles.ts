import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'column',
    },
    leftArrow: {
        position: 'absolute',
        height: '100%',
        width: 32,
        backgroundColor: 'transparent',
    },
    rightArrow: {
        position: 'absolute',
        height: '100%',
        width: 32,
        right: 0,
        backgroundColor: 'transparent',
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
        backgroundColor: '#00000044',
    },
});

export default styles;
