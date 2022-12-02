import { FC } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { Hotel } from '../../api/types';
import { Text, View } from '../Themed';
import styles from './styles';

interface IHotel {
    item: Hotel;
    onPress: (item: Hotel) => void;
}

const HotelItem: FC<IHotel> = ({ item, onPress }) => {
    return (
        <TouchableOpacity onPress={() => onPress(item)}>
            <View
                style={styles.container}
                lightColor="#a2c2f5"
                darkColor="#1f63d1"
            >
                <Image
                    style={styles.image}
                    source={{ uri: item.gallery?.[0] }}
                />
                <View style={styles.metadataContainer}>
                    <Text>{item.name}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default HotelItem;
