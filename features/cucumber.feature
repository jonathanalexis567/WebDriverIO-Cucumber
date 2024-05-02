#Created By Jonathan A. Ramírez Colón 
#Date: 5/2/2024

Feature: Google Search
    Scenario: Input a word in Google Chrome
        Given Open Google Chrome
        When Input word in Search
        Then Press Enter