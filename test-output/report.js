$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("register.feature");
formatter.feature({
  "line": 1,
  "name": "Register an Account on FreeCrm",
  "description": "",
  "id": "register-an-account-on-freecrm",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 14,
  "name": "Adding valid credentials user info",
  "description": "",
  "id": "register-an-account-on-freecrm;adding-valid-credentials-user-info",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@regis"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "I open Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I navigate to FreeCrm",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I enter the credentials info such as \"\u003cpayPlan\u003e\" and \"\u003cfname\u003e\" and \"\u003clname\u003e\" and \"\u003cemail\u003e\" and \"\u003cuname\u003e\"  and \"\u003cpword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Checked the terms and conditions button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Click on submit button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I succesfully created an account",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "I close the browser",
  "keyword": "And "
});
formatter.examples({
  "line": 23,
  "name": "",
  "description": "",
  "id": "register-an-account-on-freecrm;adding-valid-credentials-user-info;",
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
      "line": 24,
      "id": "register-an-account-on-freecrm;adding-valid-credentials-user-info;;1"
    },
    {
      "cells": [
        "Free Edition",
        "seyedabbas",
        "mosawi",
        "samosawi7@gmail.com",
        "simajoon",
        "1234"
      ],
      "line": 25,
      "id": "register-an-account-on-freecrm;adding-valid-credentials-user-info;;2"
    },
    {
      "cells": [
        "Free Edition",
        "seyedakbar",
        "mosawi",
        "akbar@gmail.com",
        "akijoon",
        "4321"
      ],
      "line": 26,
      "id": "register-an-account-on-freecrm;adding-valid-credentials-user-info;;3"
    },
    {
      "cells": [
        "Free Edition",
        "seyedabbas",
        "mosawi",
        "asghar@gmail.com",
        "asijoon",
        "12345"
      ],
      "line": 27,
      "id": "register-an-account-on-freecrm;adding-valid-credentials-user-info;;4"
    },
    {
      "cells": [
        "Free Edition",
        "seyedabbas",
        "mosawi",
        "mamad@gmail.com",
        "mamijoon",
        "54321"
      ],
      "line": 28,
      "id": "register-an-account-on-freecrm;adding-valid-credentials-user-info;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 25,
  "name": "Adding valid credentials user info",
  "description": "",
  "id": "register-an-account-on-freecrm;adding-valid-credentials-user-info;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@regis"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "I open Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I navigate to FreeCrm",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I enter the credentials info such as \"Free Edition\" and \"seyedabbas\" and \"mosawi\" and \"samosawi7@gmail.com\" and \"simajoon\"  and \"1234\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Checked the terms and conditions button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Click on submit button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I succesfully created an account",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "I close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_open_Browser()"
});
formatter.result({
  "duration": 3371531404,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_navigate_to_Free_CRM()"
});
formatter.result({
  "duration": 1773486981,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Free Edition",
      "offset": 38
    },
    {
      "val": "seyedabbas",
      "offset": 57
    },
    {
      "val": "mosawi",
      "offset": 74
    },
    {
      "val": "samosawi7@gmail.com",
      "offset": 87
    },
    {
      "val": "simajoon",
      "offset": 113
    },
    {
      "val": "1234",
      "offset": 129
    }
  ],
  "location": "RegistrationSteps.i_enter_the_credentials_info_such_as_and_and_and_and_and(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 5650395281,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.checked_the_terms_and_conditions_button()"
});
formatter.result({
  "duration": 84256425,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.click_on_submit_button()"
});
formatter.result({
  "duration": 101269363,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.i_succesfully_created_an_account()"
});
formatter.result({
  "duration": 10329131,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_close_the_browser()"
});
formatter.result({
  "duration": 231422062,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Adding valid credentials user info",
  "description": "",
  "id": "register-an-account-on-freecrm;adding-valid-credentials-user-info;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@regis"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "I open Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I navigate to FreeCrm",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I enter the credentials info such as \"Free Edition\" and \"seyedakbar\" and \"mosawi\" and \"akbar@gmail.com\" and \"akijoon\"  and \"4321\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Checked the terms and conditions button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Click on submit button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I succesfully created an account",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "I close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_open_Browser()"
});
formatter.result({
  "duration": 2191722497,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_navigate_to_Free_CRM()"
});
formatter.result({
  "duration": 1961190384,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Free Edition",
      "offset": 38
    },
    {
      "val": "seyedakbar",
      "offset": 57
    },
    {
      "val": "mosawi",
      "offset": 74
    },
    {
      "val": "akbar@gmail.com",
      "offset": 87
    },
    {
      "val": "akijoon",
      "offset": 109
    },
    {
      "val": "4321",
      "offset": 124
    }
  ],
  "location": "RegistrationSteps.i_enter_the_credentials_info_such_as_and_and_and_and_and(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 4968820163,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.checked_the_terms_and_conditions_button()"
});
formatter.result({
  "duration": 100966157,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.click_on_submit_button()"
});
formatter.result({
  "duration": 85094199,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.i_succesfully_created_an_account()"
});
formatter.result({
  "duration": 6541826,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_close_the_browser()"
});
formatter.result({
  "duration": 213995581,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Adding valid credentials user info",
  "description": "",
  "id": "register-an-account-on-freecrm;adding-valid-credentials-user-info;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@regis"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "I open Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I navigate to FreeCrm",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I enter the credentials info such as \"Free Edition\" and \"seyedabbas\" and \"mosawi\" and \"asghar@gmail.com\" and \"asijoon\"  and \"12345\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Checked the terms and conditions button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Click on submit button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I succesfully created an account",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "I close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_open_Browser()"
});
formatter.result({
  "duration": 2237130390,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_navigate_to_Free_CRM()"
});
formatter.result({
  "duration": 1705649910,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Free Edition",
      "offset": 38
    },
    {
      "val": "seyedabbas",
      "offset": 57
    },
    {
      "val": "mosawi",
      "offset": 74
    },
    {
      "val": "asghar@gmail.com",
      "offset": 87
    },
    {
      "val": "asijoon",
      "offset": 110
    },
    {
      "val": "12345",
      "offset": 125
    }
  ],
  "location": "RegistrationSteps.i_enter_the_credentials_info_such_as_and_and_and_and_and(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 5173871356,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.checked_the_terms_and_conditions_button()"
});
formatter.result({
  "duration": 104369001,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.click_on_submit_button()"
});
formatter.result({
  "duration": 102232868,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.i_succesfully_created_an_account()"
});
formatter.result({
  "duration": 10996699,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_close_the_browser()"
});
formatter.result({
  "duration": 230892198,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Adding valid credentials user info",
  "description": "",
  "id": "register-an-account-on-freecrm;adding-valid-credentials-user-info;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@regis"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "I open Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I navigate to FreeCrm",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I enter the credentials info such as \"Free Edition\" and \"seyedabbas\" and \"mosawi\" and \"mamad@gmail.com\" and \"mamijoon\"  and \"54321\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Checked the terms and conditions button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Click on submit button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I succesfully created an account",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "I close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_open_Browser()"
});
formatter.result({
  "duration": 2197903382,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_navigate_to_Free_CRM()"
});
formatter.result({
  "duration": 1771274298,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Free Edition",
      "offset": 38
    },
    {
      "val": "seyedabbas",
      "offset": 57
    },
    {
      "val": "mosawi",
      "offset": 74
    },
    {
      "val": "mamad@gmail.com",
      "offset": 87
    },
    {
      "val": "mamijoon",
      "offset": 109
    },
    {
      "val": "54321",
      "offset": 125
    }
  ],
  "location": "RegistrationSteps.i_enter_the_credentials_info_such_as_and_and_and_and_and(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 5318213193,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.checked_the_terms_and_conditions_button()"
});
formatter.result({
  "duration": 116570402,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.click_on_submit_button()"
});
formatter.result({
  "duration": 98874500,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.i_succesfully_created_an_account()"
});
formatter.result({
  "duration": 6347243,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_close_the_browser()"
});
formatter.result({
  "duration": 213504207,
  "status": "passed"
});
});