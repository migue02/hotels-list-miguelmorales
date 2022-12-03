## Utils

Utils functions that can be used in the entire app

### getIcon

It accepts one parameter:

-   **rating**: _number_

It returns a string with an icon to be used in a `MaterialCommunityIcons` with the following logic:

-   Rating higher or equal to 9:
    -   Cool emoticon
-   Rating higher or equal to 7 and lower than 9:
    -   Happy emoticon
-   Rating higher or equal to 5 and lower than 7:

    -   Neutral emoticon

-   Rating lower than 5:

    -   Sad emoticon

### getColor

It accepts one parameter:

-   **rating**: _number_

It returns a string with the following logic:

-   Rating higher or equal to 9:
    -   Green color
-   Rating higher or equal to 7 and lower than 9:
    -   Orange color
-   Rating higher or equal to 5 and lower than 7:
    -   Black color
-   Rating lower than 5:
    -   Red color
