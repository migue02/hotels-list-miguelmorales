import { Platform, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    header: {
        zIndex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'flex-end',
        justifyContent: 'flex-end',
        paddingHorizontal: 16,
    },
    picker: {
        width: '50%',
        marginLeft: 16,
    },
});

export default styles;
