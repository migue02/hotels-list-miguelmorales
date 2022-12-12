import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    noHotels: {
        fontSize: 20,
        textAlign: 'center',
    },
    bottom: {
        zIndex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'flex-end',
        justifyContent: 'flex-end',
        padding: 16,
    },
    picker: {
        width: '50%',
        marginLeft: 16,
    },
});

export default styles;
