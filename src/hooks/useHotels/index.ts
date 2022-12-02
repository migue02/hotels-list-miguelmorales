import { useEffect, useState } from 'react';
import { getHotels } from '../../api';
import { Hotel } from '../../api/types';

const useHotels = function (): {
    hotels: Hotel[];
    loading: boolean;
    search: (text: string) => void;
} {
    const [hotels, setHotels] = useState<Hotel[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchHotels = async () => {
            setLoading(true);
            const hotels = await getHotels();

            setHotels(hotels);
            setLoading(false);
        };
        void fetchHotels();
    }, []);

    const search = (text: string) => {
        const filteredHotels = hotels.filter((hotel) =>
            hotel.name.toLocaleLowerCase().includes(text.toLocaleLowerCase())
        );

        setHotels(filteredHotels);
    };

    return { hotels, loading, search };
};

export default useHotels;
