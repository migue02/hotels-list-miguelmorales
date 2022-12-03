import React, { FC } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import shortid from 'shortid';
import { View } from '../Themed';
import styles from './styles';

interface IProps {
    stars: number;
    totalStars?: number;
}

const Stars: FC<IProps> = (props) => {
    const { stars, totalStars = stars } = props;

    return (
        <View style={styles.container}>
            {[...Array(totalStars)].map((_, i) => (
                <FontAwesome
                    key={shortid.generate()}
                    testID={`star-${i}`}
                    style={styles.star}
                    name={i < stars ? 'star' : 'star-o'}
                    size={16}
                    color="#FFC34E"
                />
            ))}
        </View>
    );
};

export default Stars;
