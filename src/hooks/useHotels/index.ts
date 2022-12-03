import { useEffect, useState } from 'react';

import { getHotels } from '../../api';
import { Hotel } from '../../api/types';

const useHotels = function (): {
    hotels: Hotel[];
    loading: boolean;
    search: (text: string) => void;
    order: (field: keyof Hotel | '') => void;
} {
    const [initalHotels, setInitalHotels] = useState<Hotel[]>([]);
    const [filteredHotels, setFilteredHotels] = useState<Hotel[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchHotels = async () => {
            setLoading(true);
            const hotels = await getHotels();

            setInitalHotels([...hotels]);
            setFilteredHotels([...hotels]);
            setLoading(false);
        };
        fetchHotels();
    }, []);

    const search = (text: string) => {
        if (text) {
            setFilteredHotels(
                initalHotels.filter((hotel) =>
                    hotel.name.toLowerCase().includes(text.toLowerCase())
                )
            );
        } else {
            setFilteredHotels([...initalHotels]);
        }
    };

    const order = (field: keyof Hotel | '') => {
        if (field && field.length > 0) {
            setFilteredHotels((prev) => [
                ...prev.sort((h1, h2) => {
                    if (typeof h1[field] === 'string') {
                        return h1[field] > h2[field] ? 1 : -1;
                    } else {
                        return h1[field] < h2[field] ? 1 : -1;
                    }
                }),
            ]);
        } else {
            setFilteredHotels([...initalHotels]);
        }
    };

    return {
        hotels: filteredHotels,
        loading,
        search,
        order,
    };
};

export default useHotels;
