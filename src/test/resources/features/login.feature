Feature: LoginFeature

  Scenario: Valid Login
    Given I open Browser
    And I navigate to FreeCrm
    When I enter "abbasaqa" and "kowkabjoon"
    And I click Login button
    Then I successfully logged in
    And I close the browser
    

  
  Scenario: Invalid Login
    Given I open Browser
    And I navigate to FreeCrm
    When I enter "abbasaqa" and "kowkabjoon"
    And I click Login button
    Then I did NOT successfully logged in
    And I close the browser


 
  Scenario: valid username and invalid password
    Given I open Browser
    And I navigate to FreeCrm
    When I enter "abbasaqa" and "kowkab"
    And I click Login button
    Then seeing the sign up link
    And I close the browser
