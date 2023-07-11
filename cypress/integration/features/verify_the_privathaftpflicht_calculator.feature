Feature: Verivox Website test Privathaftpflicht calculator

Scenario: Verify the Privathaftpflicht calculator

Given That I can open "www.verivox.de"
When I navigate to Versicherungen and select Privathaftpflicht
When I enter my age and Single ohne Kinder
When I go to the Privathaftpflicht personal information page
When I enter my birthdate
When I enter my zip code 
When I click the Jetzt vergleichen button
Then I should see a page that lists the available tariffs for my selection
