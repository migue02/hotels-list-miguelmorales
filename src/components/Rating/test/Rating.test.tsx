import { render, screen } from '@testing-library/react-native';
import React from 'react';
import { Text } from 'react-native';

import Rating from '..';
import { getRatingIcon } from '../../../utils';

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
