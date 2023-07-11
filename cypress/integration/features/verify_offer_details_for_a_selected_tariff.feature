Feature: Verivox Website offer details for a selected tariff

Background:
Given That I can open "www.verivox.de"
When I navigate to Versicherungen and select Privathaftpflicht
When I enter my age and Single ohne Kinder
When I go to the Privathaftpflicht personal information page
When I enter my birthdate
When I enter my zip code 
When I click the Jetzt vergleichen button
Then I should see a page that lists the available tariffs for my selection 

Scenario: Verify offer details for a selected tariff

When I display the tariff Result List page
Then I should see the tariff price of the first tariff
When I open tariff details
Then I see tarrif details sections: "Wich­tigs­te Leis­tun­gen", "All­ge­mein", "Tä­tig­kei­ten und Hob­bys"
Then I see tariff details sections: "Miete & Im­mo­bi­li­en", "Do­kumen­te"
When I see the ZUM ONLINE-ANTRAG button
