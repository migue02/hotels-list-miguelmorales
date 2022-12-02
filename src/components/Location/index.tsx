import React, { FC } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Text, View } from '../Themed';
import styles from './styles';
import { Location as LocationType } from '../../api/types';
import { Platform } from 'react-native';
import * as Linking from 'expo-linking';

interface IProps {
    location: LocationType;
}

const Location: FC<IProps> = (props) => {
    const { location } = props;

    const openGps = (lat: number, lng: number) => {
        var scheme = Platform.OS === 'ios' ? 'maps:' : 'geo:';
        var url = scheme + `${lat},${lng}`;
        Linking.openURL(url);
    };

    return (
        <View style={styles.container}>
            <View style={styles.addressContainer}>
                <Text style={styles.address} numberOfLines={1}>
                    {location.address}
                </Text>
                <Text style={styles.city}>{location.city}</Text>
            </View>
            <MaterialCommunityIcons
                name="map-marker"
                size={32}
                color="blue"
                onPress={() => openGps(location.latitude, location.longitude)}
            />
        </View>
    );
};

export default Location;
