import { useRef, useState } from 'react';
import { FlatList, ListRenderItem, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { View } from '../Themed';
import styles from './styles';
import { GenericListProps } from './types';

const GenericList = <ItemT,>(props: GenericListProps<ItemT>) => {
    const {
        horizontal,
        items,
        keyExtractor,
        renderDetails: RenderItemComponent,
        onPressItem,
        scrollButtons,
    } = props;
    const flatListRef = useRef<FlatList>(null);

    const [currentIndex, setCurrentIndex] = useState(0);

    const changeIndex = (next: boolean) => {
        if (items?.length) {
            const newIndex = next
                ? Math.min(currentIndex + 1, items.length - 1)
                : Math.max(currentIndex - 1, 0);
            setCurrentIndex(newIndex);
            flatListRef.current?.scrollToIndex({ index: newIndex });
        }
    };

    const renderItem: ListRenderItem<ItemT> = ({ item }) => (
        <RenderItemComponent item={item} onPress={onPressItem} />
    );

    return (
        <>
            <FlatList
                ref={flatListRef}
                data={items}
                horizontal={horizontal}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
                scrollEnabled={!(scrollButtons && items?.length)}
            />
            {scrollButtons && items?.length ? (
                <>
                    {currentIndex > 0 ? (
                        <View style={styles.leftArrow}>
                            <View style={styles.outerIcon}>
                                <TouchableOpacity
                                    style={styles.icon}
                                    onPress={() => changeIndex(false)}
                                >
                                    <AntDesign
                                        name="leftcircleo"
                                        size={24}
                                        color="#DDD"
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                    ) : null}
                    {currentIndex + 1 < items.length ? (
                        <View style={styles.rightArrow}>
                            <View style={styles.outerIcon}>
                                <TouchableOpacity
                                    style={styles.icon}
                                    onPress={() => changeIndex(true)}
                                >
                                    <AntDesign
                                        name="rightcircleo"
                                        size={24}
                                        color="#DDD"
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                    ) : null}
                </>
            ) : null}
        </>
    );
};

export default GenericList;
