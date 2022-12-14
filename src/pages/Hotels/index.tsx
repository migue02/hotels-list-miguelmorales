import { FC, useEffect } from 'react';
import { ActivityIndicator } from 'react-native';

import { Hotel } from '../../api/types';
import GenericList from '../../components/GenericList';
import HotelDropDownPicker from '../../components/HotelDropDownPicker';
import HotelItem from '../../components/HotelItem';
import { Text, View } from '../../components/Themed';
import useHotels from '../../hooks/useHotels';
import { HotelsProps } from '../types';
import styles from './styles';

const Hotels: FC<HotelsProps> = (props) => {
    const { navigation } = props;
    const { hotels, search, order, loading } = useHotels();

    useEffect(() => {
        navigation.setOptions({
            headerSearchBarOptions: {
                placeholder: 'Search',
                onChangeText: (event: { nativeEvent: { text: string } }) =>
                    search(event.nativeEvent.text),
            },
        });
    }, [navigation, search]);

    if (loading) {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" />
            </View>
        );
    }

    if (hotels.length === 0) {
        return (
            <View style={styles.container}>
                <Text style={styles.noHotels}>Hotel not found...</Text>
            </View>
        );
    }

    return (
        <>
            <GenericList
                items={hotels}
                renderDetails={HotelItem}
                keyExtractor={(item: Hotel) => `${item.id}`}
            />
            <View style={styles.bottom}>
                <Text>Order by</Text>
                <View style={styles.picker}>
                    <HotelDropDownPicker onChange={order} />
                </View>
            </View>
        </>
    );
};

export default Hotels;
