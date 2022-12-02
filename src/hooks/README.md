## Hooks

### [useHotels](https://github.com/migue02/hotels-list-miguelmorales/tree/main/src/hooks/useHotels)

Hook to be able to get the list of hotels from the backend.
It returns an object with the hotels and the loading state:

-   **hotels**: _undefined | Hotel[]_
    -   _undefined_: default value. When the request didn't happen or it's processing
    -   _hotels_ with all data: when the request is done and ok

*   **loading**: _boolean_
    -   **True** when a the request to get the hotels is happening
    -   **False** default value. When the request to get the hotels is finished or still didn't happen

#### How to use it

`const {hotels, loading} = useHotels();`
