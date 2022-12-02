import { API_URL, HOTELS_ENDPOINT } from './constants';
import { IHotelsResponse } from './types';

const request = async <Parameters, Response>(
    url: string,
    method: 'GET' | 'POST' | 'PUT',
    parameters?: Parameters
): Promise<Response> => {
    const body = parameters && JSON.stringify(parameters);

    const params: RequestInit = {
        method,
        headers: getHeaders(),
        body,
    };

    const response = await fetch(url, params);

    if (!response.ok) {
        await handleError(response);
    }

    return (await response.json()) as Response;
};

const handleError = async (response: Response) => {
    if (response.status) {
        const jsonResponse = await response.json();
        throw new Error(jsonResponse.message, { cause: response.status });
    }
};

const getHeaders = () => {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return headers;
};

const get = async <Response>(url: string): Promise<Response> => {
    return request<null, Response>(url, 'GET', undefined);
};

const put = async <Response>(url: string): Promise<Response> => {
    return request<null, Response>(url, 'PUT', undefined);
};

const post = async <Parameters, Response>(
    url: string,
    body?: Parameters
): Promise<Response> => {
    return request<Parameters, Response>(url, 'POST', body);
};

export const getHotels = async (): Promise<IHotelsResponse> => {
    return get<IHotelsResponse>(`${API_URL}${HOTELS_ENDPOINT}`);
};
