import { FC, useEffect } from 'react';

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
    }, [navigation]);

    if (loading) {
        return <Text>Loading...</Text>;
    }

    return (
        <>
            <View style={styles.header}>
                <Text>Order by</Text>
                <View style={styles.picker}>
                    <HotelDropDownPicker onChange={order} />
                </View>
            </View>
            <GenericList
                items={hotels}
                renderDetails={HotelItem}
                keyExtractor={(item: Hotel) => item.id}
            />
        </>
    );
};

export default Hotels;
