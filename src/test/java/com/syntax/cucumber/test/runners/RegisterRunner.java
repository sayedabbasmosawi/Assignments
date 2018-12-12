package com.syntax.cucumber.test.runners;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "D:\\eclipse-workspace\\syntax.cucumber\\src\\test\\resources\\features\\register.feature", glue = "")
public class RegisterRunner {

}
