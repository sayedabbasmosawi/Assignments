Feature: Register an Account on FreeCrm

  Scenario: Adding valid credentials user info
    Given I open Browser
    When I navigate to FreeCrm
    And I enter the credentials info
      | payPlan      | fname      | lname  | email               | uname      | pword      |
      | Free Edition | seyedabbas | mosawi | samosawi7@gmail.com | s.abbasaqa | kowkabjoon |
    And Checked the terms and conditions button
    And Click on submit button
    Then I succesfully created an account

  @regis
  Scenario Outline: Adding valid credentials user info
    Given I open Browser
    When I navigate to FreeCrm
    And I enter the credentials info such as "<payPlan>" and "<fname>" and "<lname>" and "<email>" and "<uname>"  and "<pword>"
    And Checked the terms and conditions button
    And Click on submit button
    Then I succesfully created an account
    And I close the browser

    Examples: 
      | payPlan      | fname      | lname  | email               | uname    | pword |
      | Free Edition | seyedabbas | mosawi | samosawi7@gmail.com | simajoon |  1234 |
      | Free Edition | seyedakbar | mosawi | akbar@gmail.com     | akijoon  |  4321 |
      | Free Edition | seyedabbas | mosawi | asghar@gmail.com    | asijoon  | 12345 |
      | Free Edition | seyedabbas | mosawi | mamad@gmail.com     | mamijoon | 54321 |
