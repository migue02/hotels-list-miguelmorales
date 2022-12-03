import { expect, test } from '@jest/globals';
import { renderHook } from '@testing-library/react-hooks';
import { act } from '@testing-library/react-native';

import useHotels from '..';
import { MockedHotel1, MockedHotel2 } from '../../../test-utils';

describe('useHotels tests', function () {
    beforeEach(async () => {
        fetchMock.mockResponseOnce(
            JSON.stringify([MockedHotel1, MockedHotel2])
        );
    });
    test('Returns all hotels', async () => {
        const { result, waitForNextUpdate } = renderHook(() => useHotels());

        let { loading, hotels } = result.current;

        expect(loading).toBe(true);
        expect(hotels).toHaveLength(0);

        await waitForNextUpdate();

        loading = result.current.loading;
        hotels = result.current.hotels;

        expect(loading).toBe(false);
        expect(hotels).toMatchObject([MockedHotel1, MockedHotel2]);
    });
    test('Order hotels by name', async () => {
        const { result, waitForNextUpdate } = renderHook(() => useHotels());

        let { loading, hotels } = result.current;

        expect(loading).toBe(true);
        expect(hotels).toHaveLength(0);

        await waitForNextUpdate();

        const { order } = result.current;

        await act(async () => {
            await order('name');
        });

        hotels = result.current.hotels;

        expect(hotels).toMatchObject([MockedHotel2, MockedHotel1]);
    });
    test('Search hotels by name', async () => {
        const { result, waitForNextUpdate } = renderHook(() => useHotels());

        let { loading, hotels } = result.current;

        expect(loading).toBe(true);
        expect(hotels).toHaveLength(0);

        await waitForNextUpdate();

        const { search } = result.current;

        await act(async () => {
            await search('Park');
        });

        hotels = result.current.hotels;

        expect(hotels).toMatchObject([MockedHotel1]);
    });
});
