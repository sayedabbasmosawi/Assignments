$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("register.feature");
formatter.feature({
  "line": 1,
  "name": "Register an Account on FreeCrm",
  "description": "",
  "id": "register-an-account-on-freecrm",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Adding valid credentials user info",
  "description": "",
  "id": "register-an-account-on-freecrm;adding-valid-credentials-user-info",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@regis"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I open Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I navigate to FreeCrm",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter the credentials info",
  "rows": [
    {
      "cells": [
        "payPlan",
        "fname",
        "lname",
        "email",
        "uname",
        "pword"
      ],
      "line": 8
    },
    {
      "cells": [
        "Free Edition",
        "seyedabbas",
        "mosawi",
        "samosawi7@gmail.com",
        "s.abbasaqa",
        "kowkabjoon"
      ],
      "line": 9
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Checked the terms and conditions button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Click on submit button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I succesfully created an account",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.i_open_Browser()"
});
formatter.result({
  "duration": 3212506062,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_navigate_to_Free_CRM()"
});
formatter.result({
  "duration": 1539729928,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.i_enter_the_credentials_info(DataTable)"
});
formatter.result({
  "duration": 5513907313,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.checked_the_terms_and_conditions_button()"
});
formatter.result({
  "duration": 102829018,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.click_on_submit_button()"
});
formatter.result({
  "duration": 90050283,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.i_succesfully_created_an_account()"
});
formatter.result({
  "duration": 34388099,
  "status": "passed"
});
});