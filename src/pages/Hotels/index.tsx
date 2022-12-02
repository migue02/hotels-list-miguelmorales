import { FC } from 'react';
import { Hotel } from '../../api/types';
import GenericList from '../../components/GenericList';
import HotelItem from '../../components/HotelItem';
import { Text } from '../../components/Themed';
import useHotels from '../../hooks/useHotels';
import { HotelsProps } from '../types';
import styles from './styles';

const List: FC<HotelsProps> = (props) => {
    const { hotels, loading } = useHotels();

    if (loading) {
        return <Text>Loading...</Text>;
    }

    return (
        <>
            <Text style={styles.title}>Hotels</Text>
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
