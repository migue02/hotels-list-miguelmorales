import { FC } from 'react';
import { Pressable } from 'react-native';
import { Hotel } from '../../api/types';
import GenericList from '../GenericList';
import HotelImage from '../HotelImage';
import { Text, View } from '../Themed';
import styles from './styles';
import Stars from '../Stars';
import Rating from '../Rating';
import Location from '../Location';

interface IHotel {
    item: Hotel;
    onPress: (item: Hotel) => void;
}

const HotelItem: FC<IHotel> = ({ item, onPress }) => {
    return (
        <Pressable onPress={() => onPress(item)}>
            <View style={styles.container}>
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
                    <Text style={styles.name} numberOfLines={1}>
                        {item.name}
                    </Text>
                    <View style={styles.middleContainer}>
                        <Stars totalStars={5} stars={item.stars} />
                        <Rating rating={item.userRating} />
                    </View>
                    <View style={styles.bottomContainer}>
                        <Location location={item.location} />
                        <Text style={styles.price}>
                            {item.price}
                            {item.currency}
                        </Text>
                    </View>
                </View>
            </View>
        </Pressable>
    );
};

export default HotelItem;
