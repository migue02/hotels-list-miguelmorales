import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        borderRadius: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    carousel: {
        width: 120,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
    },
    metadataContainer: {
        flex: 1,
        marginTop: 16,
        marginHorizontal: 16,
        backgroundColor: 'transparent',
    },
    middleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 5,
    },
    bottomContainer: {
        marginVertical: 5,
    },
    name: {
        fontSize: 16,
    },
    price: {
        flex: 1,
        textAlign: 'right',
        fontSize: 14,
    },
});

export default styles;
