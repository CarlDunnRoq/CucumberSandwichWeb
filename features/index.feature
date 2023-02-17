Feature: Basic Index website

    Scenario: Testing the About Us Link correctly directs you.
        When 'About Us' link is pressed
        Then the page should be directed to a new page

    Scenario: Testing the Myspace Link correctly directs you.
        When 'Myspace' link is pressed
        Then the page should be directed to a new page

    Scenario: Testing the Contact Info Link correctly directs you.
        When 'Contact Info' link is pressed
        Then the page should be directed to a new page

    Scenario: Testing the Change colour button changes List item 1's colour.
        When the button is pressed
        Then the list item should change colour

    Scenario: Testing the Change colour button changes List item 2's colour.
        When the button is pressed
        Then the list item should change colour

    Scenario: Testing the Change colour button changes List item 3's text.
        When the button is pressed
        Then the list item should change text to Green

    Scenario: Testing that the time button changes text to display the current time.
        When the button is pressed
        Then the current time and date should be displayed

    Scenario: Testing that the CLick me button displays a random number.
        When the button is pressed
        Then a random number should be displayed

    Scenario: Testing that the fibNumbers button displays the 100th fibanacci number and all 100 in the console.
        When the button is pressed
        Then the 100th fib number should be displayed

    Scenario: Testing that the top of page link takes you back to the top of the page.
        When 'Back to the top of the page' link is pressed
        Then the page should be directed to the top of the page
