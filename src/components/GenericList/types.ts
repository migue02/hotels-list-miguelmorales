export type GenericListProps<ItemT> = {
    items: ItemT[];
    keyExtractor: (item: ItemT) => string;
    renderDetails: React.FC<{ item: ItemT; onPress?: (item: ItemT) => void }>;
    onPressItem?: (item: ItemT) => void;
    horizontal?: boolean;
    scrollButtons?: boolean;
};
