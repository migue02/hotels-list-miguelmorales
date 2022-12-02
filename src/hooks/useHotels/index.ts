import { useEffect, useState } from 'react';
import { getHotels } from '../../api';
import { Hotel } from '../../api/types';

const useHotels = function (): {
    hotels: Hotel[];
    loading: boolean;
    search: (text: string) => void;
} {
    const [hotels, setHotels] = useState<Hotel[]>([]);
    const [filteredHotels, setFilteredHotels] = useState<Hotel[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchHotels = async () => {
            setLoading(true);
            const hotels = await getHotels();

            setHotels(hotels);
            setFilteredHotels(hotels);
            setLoading(false);
        };
        void fetchHotels();
    }, []);

    const search = (text: string) => {
        if (text) {
            const filteredHotels = hotels.filter((hotel) => {
                return hotel.name.toLowerCase().includes(text.toLowerCase());
            });

            setFilteredHotels(filteredHotels);
        } else {
            setFilteredHotels(hotels);
        }
    };

    return {
        hotels: filteredHotels,
        loading,
        search,
    };
};

export default useHotels;
