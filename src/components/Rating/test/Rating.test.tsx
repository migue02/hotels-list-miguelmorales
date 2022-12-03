import React from 'react';
import { render, screen } from '@testing-library/react-native';
import Rating from '..';
import { getRatingIcon } from '../../../utils';
import { Text } from 'react-native';

describe('<Rating />', () => {
    it('Render rating with specific rating', async () => {
        const rating = 4;
        await render(<Rating rating={rating} />);

        expect(
            await screen.findByTestId(
                `rating-emoticon-${getRatingIcon(rating)}`
            )
        ).toBeDefined();

        const ratingText = (await screen.findByTestId('rating-text')) as Text;
        expect(ratingText).toHaveTextContent(`${rating}`);
    });
});
