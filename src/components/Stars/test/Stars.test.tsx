import React from 'react';
import { render, screen } from '@testing-library/react-native';
import Stars from '..';

describe('<Stars />', () => {
    it('Render five stars', async () => {
        await render(<Stars stars={5} />);

        for (let i = 0; i < 5; i++) {
            expect(await screen.findByTestId(`star-${i}`)).toBeDefined();
        }
    });
});
