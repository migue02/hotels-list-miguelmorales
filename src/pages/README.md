## Pages

### [Hotels](https://github.com/migue02/hotels-list-miguelmorales/tree/main/src/pages/Hotels)

It renders the hotels screen of the app. This page has:

-   List of Hotels
    -   Header
        -   Title
        -   Search bar (it searches by the hotel name)
    -   Order by section
        -   Dropdown component to be able to order the current hotels list. It can order by:
            -   Name
            -   Stars
            -   User rating
            -   Price
            -   Default
    -   List of hotels showing:
        -   Carousel of hotel images with buttons to navigate
        -   Name of the hotel
        -   Stars
        -   User rating with an icon depending of the rating
        -   Location
            -   Address
            -   City
            -   Clickable icon which opens a map
        -   Price
-   It uses `useHotels` custom hook to:
    -   Get the filtered hotel list (filtered by the search bar)
    -   Initial loading state
    -   Order action
