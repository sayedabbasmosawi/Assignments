Feature: LoginFeature

Scenario: Valid Login
Given I open Browser
And I navigate to FreeCrm
When I enter valid username and password
And I click Login button
Then I successfully logged in

Scenario: Invalid Login
Given I open Browser
And I navigate to FreeCrm
When I enter invalid username and password
And I click Login button
Then I did NOT successfully logged in
And I close the browser





