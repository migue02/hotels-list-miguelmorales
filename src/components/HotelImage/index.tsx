import { FC, useState } from 'react';
import { Image } from 'react-native';

import styles from './styles';

interface IHoteImagel {
    item: string;
}

const NoImage = 'https://placehold.jp/120x120.jpg';

const HoteImagel: FC<IHoteImagel> = ({ item }) => {
    const [image, setImage] = useState(item);
    return (
        <Image
            style={styles.image}
            onError={() => setImage(NoImage)}
            source={{ uri: image }}
        />
    );
};

export default HoteImagel;
