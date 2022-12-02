import { useEffect, useState } from 'react';
import { getHotels } from '../../api';
import { Hotel } from '../../api/types';

const useHotels = function (): { hotels: Hotel[]; loading: boolean } {
    const [hotels, setHotels] = useState<Hotel[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchHotels = async () => {
            setLoading(true);
            const hotels = await getHotels();
            console.log({ hotels });

            setHotels(hotels);
            setLoading(false);
        };
        void fetchHotels();
    }, []);

    return { hotels, loading };
};

export default useHotels;
