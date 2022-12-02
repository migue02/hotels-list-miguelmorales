import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        borderRadius: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    image: {
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        width: 84,
        minHeight: 84,
    },
    metadataContainer: {
        flex: 1,
        marginHorizontal: 16,
        backgroundColor: 'transparent',
        justifyContent: 'space-around',
    },
});

export default styles;
