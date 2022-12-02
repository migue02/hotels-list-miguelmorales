## API

Implementation for the API used in the app. It contains these functions:

### request

-   It receives:
    -   url: Request URL
    -   method: 'GET' | 'POST' | 'PUT'
    -   _parameters_: Parameters (Optional)
        -   It will be only used for POST requests
-   It returns:
    -   Promise with a given response type

### handleError

-   It receives:
    -   Failing response
-   It returns:
    -   It gets the JSON from the response and throws an error with the message and the status.

### getHeaders

-   It returns
    -   Header object to use in the requests with `'Content-Type', 'application/json'`

### get

It calls to the `request` function with the proper GET params.

### put

It calls to the `request` function with the proper PUT params.

### post

It calls to the `request` function with the proper POST params.

### getHotels (exported)

It calls to the **HOTELS_ENDPOINT** to get a hotels list, and it returns `Promise<IHotelsResponse>` with the hotels.
