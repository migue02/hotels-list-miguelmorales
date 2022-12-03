import { useEffect, useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import { Hotel } from '../../api/types';

type MyDropDownPickerProps = {
    onChange: (value: keyof Hotel | '') => void;
    items?: {
        label: string;
        value: keyof Hotel | '';
    }[];
};

const defaultItems = [
    { label: 'Default', value: '' },
    { label: 'Name', value: 'name' },
    { label: 'Stars', value: 'stars' },
    { label: 'User rating', value: 'userRating' },
    { label: 'Price', value: 'price' },
];

const HotelDropDownPicker = (props: MyDropDownPickerProps) => {
    const { items: propItems = defaultItems, onChange } = props;

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState<keyof Hotel | ''>('');
    const [items, setItems] = useState(propItems);

    useEffect(() => {
        onChange(value);
    }, [value]);

    return (
        <DropDownPicker
            placeholder="Default"
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
        />
    );
};

export default HotelDropDownPicker;
