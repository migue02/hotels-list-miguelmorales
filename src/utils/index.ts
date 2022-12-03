export const getRatingIcon = (rating: number) => {
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

export const getRatingColor = (rating: number) => {
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
