import React, { FC } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Text, View } from '../Themed';
import styles from './styles';
import { getRatingIcon, getRatingColor } from '../../utils';

interface IProps {
    rating: number;
}

const Rating: FC<IProps> = (props) => {
    const { rating } = props;

    return (
        <View style={styles.container}>
            <MaterialCommunityIcons
                testID={`rating-emoticon-${getRatingIcon(rating)}`}
                name={getRatingIcon(rating)}
                color={getRatingColor(rating)}
                size={24}
            />
            <Text testID={`rating-text`} style={styles.rating}>
                {rating}
            </Text>
        </View>
    );
};

export default Rating;
