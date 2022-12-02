import { FlatList, ListRenderItem } from 'react-native';

type Props<ItemT> = {
    items?: ItemT[];
    keyExtractor: (item: ItemT) => string;
    renderDetails: React.FC<{ item: ItemT; onPress: (item: ItemT) => void }>;
    onPressItem: (item: ItemT) => void;
};

const GenericList = <ItemT,>({
    items,
    keyExtractor,
    renderDetails: RenderItemComponent,
    onPressItem,
}: Props<ItemT>) => {
    const renderItem: ListRenderItem<ItemT> = ({ item }) => (
        <RenderItemComponent item={item} onPress={onPressItem} />
    );

    return (
        <FlatList
            data={items}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
        />
    );
};

export default GenericList;
