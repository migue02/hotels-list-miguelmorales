import { FC, useEffect } from 'react';
import { Hotel } from '../../api/types';
import GenericList from '../../components/GenericList';
import HotelItem from '../../components/HotelItem';
import { Text } from '../../components/Themed';
import useHotels from '../../hooks/useHotels';
import { HotelsProps } from '../types';

const List: FC<HotelsProps> = (props) => {
    const { navigation } = props;
    const { hotels, search, loading } = useHotels();

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
        <GenericList
            items={hotels}
            renderDetails={HotelItem}
            onPressItem={(item: Hotel) => console.log({ item })}
            keyExtractor={(item: Hotel) => item.id}
        />
    );
};

export default List;
