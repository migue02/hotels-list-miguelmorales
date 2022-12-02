export type GenericListProps<ItemT> = {
    items?: ItemT[];
    horizontal?: boolean;
    keyExtractor: (item: ItemT) => string;
    renderDetails: React.FC<{ item: ItemT; onPress: (item: ItemT) => void }>;
    onPressItem: (item: ItemT) => void;
    scrollButtons?: boolean;
};
