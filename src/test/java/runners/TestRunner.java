package runners;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src\\test\\resources\\features", tags = { "@regis" }, glue = {
		"" }, dryRun = false, plugin = { "html:test-output" }, monochrome = true)

public class TestRunner {

}
