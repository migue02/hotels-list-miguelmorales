import React, { FC } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Text, View } from '../Themed';
import styles from './styles';

interface IProps {
    rating: number;
}

const Rating: FC<IProps> = (props) => {
    const { rating } = props;

    const getIcon = () => {
        if (rating >= 9) {
            return 'emoticon-cool-outline';
        } else if (rating >= 7) {
            return 'emoticon-outline';
        } else if (rating >= 5) {
            return 'emoticon-neutral-outline';
        } else {
            return 'emoticon-sad-outline';
        }
    };

    const getColor = () => {
        if (rating >= 9) {
            return 'green';
        } else if (rating >= 7) {
            return 'orange';
        } else if (rating >= 5) {
            return 'black';
        } else {
            return 'red';
        }
    };

    return (
        <View style={styles.container}>
            <MaterialCommunityIcons
                name={getIcon()}
                color={getColor()}
                size={24}
            />
            <Text style={styles.rating}>{rating}</Text>
        </View>
    );
};

export default Rating;
