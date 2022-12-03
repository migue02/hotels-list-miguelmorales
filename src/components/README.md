## Components

### [GenericList](https://github.com/migue02/hotels-list-miguelmorales/tree/main/src/components/GenericList)

Components that uses FlatList in order to return a GenericList that can be scrollable.
This GenericList accepts several parameters which uses to form the desired List:

-   **items**: _ItemT[]_
    -   List of items to be rendered. Uses a generic type.

*   **keyExtractor**: _(item: ItemT) => string_

    -   Function to get the key that each item will use, so each key is unique.

*   **renderDetails**: _React.FC<{ item: ItemT; onPress?: (item: ItemT) => void }>_

    -   Component that will be use to render each item. This component has two props:
        -   _item_: The item to be rendered
        -   _onPress_: (Optional) Callback (which receives the item) to be executed when the item is pressed

*   **onPressItem**: _(item: ItemT) => void_ (Optional)

    -   Callback (which receives the item) to be executed when the item is pressed

*   **horizontal**: _boolean_ (Optional)

    -   **False** (_default value_) to create an vertical list
    -   **True** to create an horizontal list

*   **scrollButtons**: _boolean_ (Optional)

    -   **False** (_default value_) to not show scroll buttons and enable scrolling by swiping
    -   **True** to show scroll buttons and disable scrolling by swiping

### [HotelItem](https://github.com/migue02/hotels-list-miguelmorales/tree/main/src/components/HotelItem)

It renders the item shown in the Hotels list which this information:

-   Carousel of hotel images with buttons to navigate
-   Name of the hotel
-   Stars
-   User rating with an icon depending of the rating
-   Location
-   Address
-   City
-   Clickable icon which opens a map
-   Price per night

It accepts two parameters:

-   **hotel**: _Hotel_

    -   Hotel to be rendered

-   **onPress**: _(item: Hotel) => void_ (Optional)

    -   Callback when the item is clicked (Everything is wrapped in a Pressable)

### [HotelImage](https://github.com/migue02/hotels-list-miguelmorales/tree/main/src/components/HotelImage)

It renders the image passed as a prop as a URL. If the URL is broken it will show a default image (_https://placehold.jp/120x120.jpg_).

-   **item**: _string_

    -   Image URL

### [Location](https://github.com/migue02/hotels-list-miguelmorales/tree/main/src/components/Location)

It renders the location of a Hotel. It receives a Location object and shows its address and city.
It also renders an map-marker icon which is clickable and leads you to an installed application map pointing to a specific latitude and longitude.

-   **location**: _Location_

    -   Location of a Hotel

### [Rating](https://github.com/migue02/hotels-list-miguelmorales/tree/main/src/components/Rating)

It renders the user rating of a Hotel. It receives a number and shows this number along with an emoticon.

-   **rating**: _number_

    -   Rating of a Hotel

Depending on the rating, it can show 4 different emoticons and colors.

-   Rating higher or equal to 9:
    -   Cool emoticon
    -   Green color
-   Rating higher or equal to 7 and lower than 9:
    -   Happy emoticon
    -   Orange color
-   Rating higher or equal to 5 and lower than 7:
    -   Neutral emoticon
    -   Black color
-   Rating lower than 5:
    -   Sad emoticon
    -   Red color

### [Stars](https://github.com/migue02/hotels-list-miguelmorales/tree/main/src/components/Stars)

It renders the stars of a Hotel. It accepts two parameters:

-   **stars**: _number_

    -   Stars of the hotel

-   **totalStars**: _number_ (Optional)

    -   Max stars. If this one is defined it will render this amount of stars filling the number of stars specified in the **stars** prop, and the rest of stars as empty (outlined) stars.

### [Themed](https://github.com/migue02/hotels-list-miguelmorales/tree/main/src/components/Themed)

Set of themed components. These components change their color depending on the selected of the app.

#### [Utils](https://github.com/migue02/hotels-list-miguelmorales/tree/main/src/components/Themed/utils.ts)

It exports all types to be used in each Themed component. These types has this form:

-   ThemeProps & Component['props']
    -   Where ThemeProps is just `{ lightColor?: string; darkColor?: string; }`. So you can set a specific light or dark color
    -   Where Component['props'] are the base props of that component

It exports the `useThemeProp` hook which returns the color to be used. It accepts two parameter:

-   **props**: _{ light?: string; dark?: string }_
    -   Colors coming from props (lightColor or darkColor used in a Themed component). They are optional.
-   **prop**: _keyof typeof Colors.light_

    -   Key of the color we want to get from the Theme (_text_, _background_, _button_...).

#### [View](https://github.com/migue02/hotels-list-miguelmorales/tree/main/src/components/Themed/View)

ReactNative View which accepts lightColor and darkColor prop to specify a specific color.
If these props are not specified it will use the default color specified in the Theme (depending on the app theme)

#### [Text](https://github.com/migue02/hotels-list-miguelmorales/tree/main/src/components/Themed/Text)

ReactNative Text which accepts lightColor and darkColor prop to specify a specific color.
If these props are not specified it will use the default color specified in the Theme (depending on the app theme)

#### [Button](https://github.com/migue02/hotels-list-miguelmorales/tree/main/src/components/Themed/Button)

ReactNative TouchableOpacity which accepts lightColor and darkColor prop to specify a specific color.
If these props are not specified it will use the default color specified in the Theme (depending on the app theme)
