Feature: Register an Account on FreeCrm

  @regis
  Scenario: Adding valid credentials user info
    Given I open Browser
    When I navigate to FreeCrm
    And I enter the credentials info
      | payPlan      | fname      | lname  | email               | uname      | pword      |
      | Free Edition | seyedabbas | mosawi | samosawi7@gmail.com | s.abbasaqa | kowkabjoon |
    And Checked the terms and conditions button
    And Click on submit button
    Then I succesfully created an account
