Feature: Search product
    In order to find a product
    As a non registered user
    I want to search for a product

    Scenario: The non-registered user confirms the search functionality renders on the Home page
        Given the non-registered user navigates to the URL: "https://www.manomano.co.uk/"
        When the non-registered user accepts the use of cookies
        And the non-registered user is viewing the Home page
        Then the non-registered user confirms the Search field is present
        And the non-registered user confirms the Search button is present

    Scenario: The non-registered user searches without entering anything in the Search field
        Given the non-registered user navigates to the URL: "https://www.manomano.co.uk/"
        And the non-registered user allows the use of cookies
        And the non-registered user is viewing the Home page
        When the non-registered user does not enter any text in the Search field
        And the non-registered user clicks on the Search button
        Then the non-registered user confirms the search functionality is not executed

    Scenario: The non-registered user clears the search keyword
        Given the non-registered user navigates to the URL: "https://www.manomano.co.uk/"
        And the non-registered user accepts the use of cookies
        And the non-registered user is viewing the Home page
        And the non-registered user enters "battery" text in the Search field
        When the non-registered user clicks on the Cancel option in the Search field
        Then the non-registered user confirms the information enter in the Search field is removed

    Scenario: The non-registered user searches a parameter that not matches the existing data
        Given the non-registered user navigates to the URL: "https://www.manomano.co.uk/"
        And the non-registered user accepts the use of cookies
        And the non-registered user is viewing the Home page
        When the non-registered user enters the parameter "abcd1234*" that not match the existing products in the Search field
        And the non-registered user clicks on the Search button
        Then the non-registered user confirms the Result page is displayed
        And the non-registered user confirms the "no products found" message is displayed

    Scenario: The non-registered user searches a parameter that matches the existing data
        Given the non-registered user navigates to the URL: "https://www.manomano.co.uk/"
        And the non-registered user accepts the use of cookies
        And the non-registered user is viewing the Home page
        When the non-registered user enters the parameter "Box" in the Search field
        And the non-registered user clicks on the Search button
        Then the non-registered user confirms the Result page is displayed
        And the non-registered user confirms the "Box" text is displayed according to the entered text in the search field

    Scenario: The non-registered user confirms the auto suggestion is displayed in the Search field
        Given the non-registered user navigates to the URL: "https://www.manomano.co.uk/"
        And the non-registered user accepts the use of cookies
        And the non-registered user is viewing the Home page
        When the non-registered user enters the parameter "battery" in the Search field
        Then the non-registered user confirms the auto suggestion is displayed
        And the non-registered user confirms the "battery" text is displayed in the auto suggestion list is according to the entered text in the search field

