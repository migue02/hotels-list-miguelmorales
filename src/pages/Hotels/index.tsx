import { FC, useEffect, useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import { Hotel } from '../../api/types';
import GenericList from '../../components/GenericList';
import HotelItem from '../../components/HotelItem';
import { Text, View } from '../../components/Themed';
import useHotels from '../../hooks/useHotels';
import { HotelsProps } from '../types';
import styles from './styles';

const List: FC<HotelsProps> = (props) => {
    const { navigation } = props;
    const { hotels, search, order, loading } = useHotels();
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState<keyof Hotel | ''>('');
    const [items, setItems] = useState([
        { label: 'Default', value: '' },
        { label: 'Name', value: 'name' },
        { label: 'Stars', value: 'stars' },
        { label: 'User rating', value: 'userRating' },
        { label: 'Price', value: 'price' },
    ]);

    useEffect(() => {
        navigation.setOptions({
            headerSearchBarOptions: {
                placeholder: 'Search',
                onChangeText: (event: { nativeEvent: { text: string } }) =>
                    search(event.nativeEvent.text),
            },
        });
    }, [navigation]);

    useEffect(() => {
        order(value);
    }, [value]);

    if (loading) {
        return <Text>Loading...</Text>;
    }

    return (
        <>
            <View style={styles.header}>
                <Text>Order by</Text>
                <View style={styles.picker}>
                    <DropDownPicker
                        placeholder="Default"
                        open={open}
                        value={value}
                        items={items}
                        setOpen={setOpen}
                        setValue={setValue}
                        setItems={setItems}
                    />
                </View>
            </View>
            <GenericList
                items={hotels}
                renderDetails={HotelItem}
                onPressItem={(item: Hotel) => console.log({ item })}
                keyExtractor={(item: Hotel) => item.id}
            />
        </>
    );
};

export default List;
