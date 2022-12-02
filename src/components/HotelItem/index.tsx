import { FC } from 'react';
import { Pressable } from 'react-native';
import { Hotel } from '../../api/types';
import GenericList from '../GenericList';
import HotelImage from '../HotelImage';
import { Text, View } from '../Themed';
import styles from './styles';

interface IHotel {
    item: Hotel;
    onPress: (item: Hotel) => void;
}

const HotelItem: FC<IHotel> = ({ item, onPress }) => {
    return (
        <Pressable onPress={() => onPress(item)}>
            <View
                style={styles.container}
                lightColor="#a2c2f5"
                darkColor="#1f63d1"
            >
                <View style={styles.carousel}>
                    <GenericList
                        keyExtractor={(item: string) => item}
                        horizontal
                        items={item.gallery}
                        renderDetails={HotelImage}
                        onPressItem={(item: string) => console.log({ item })}
                        scrollButtons
                    />
                </View>
                <View style={styles.metadataContainer}>
                    <Text>{item.name}</Text>
                </View>
            </View>
        </Pressable>
    );
};

export default HotelItem;
