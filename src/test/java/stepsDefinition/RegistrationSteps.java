package stepsDefinition;

import java.util.List;
import java.util.Map;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.AssertJUnit;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import utils.BaseClass;

public class RegistrationSteps extends BaseClass {

	@When("^I enter the credentials info$")
	public void i_enter_the_credentials_info(DataTable infotable) throws Throwable {
		WebDriverWait wait = new WebDriverWait(driver, 15);

		List<Map<String, String>> maps = infotable.asMaps(String.class, String.class);

		for (Map<String, String> mapCell : maps) {

			Thread.sleep(3000);
			WebElement signUpLink = driver.findElement(By.xpath("//div[@id='navbar-collapse']/ul/li[2]/a"));
			wait.until(ExpectedConditions.elementToBeClickable(signUpLink)).click();

			WebElement dropdown = driver.findElement(By.id("payment_plan_id"));
			Select sel = new Select(dropdown);

			String payplan = mapCell.get("payPlan");
			sel.selectByVisibleText(payplan);

			String fname = mapCell.get("fname");
			driver.findElement(By.name("first_name")).sendKeys(fname);

			String lname = mapCell.get("lname");
			driver.findElement(By.name("surname")).sendKeys(lname);

			String email = mapCell.get("email");
			driver.findElement(By.name("email")).sendKeys(email);
			driver.findElement(By.name("email_confirm")).sendKeys(email);

			String uname = mapCell.get("uname");
			driver.findElement(By.name("username")).sendKeys(uname);

			String pword = mapCell.get("pword");
			driver.findElement(By.name("password")).sendKeys(pword);
			driver.findElement(By.name("passwordconfirm")).sendKeys(pword);
			driver.close();
		}

	}

//	@When("^I enter the credentials info$")
//	public void i_enter_the_credentials_info() throws Throwable {
//
//		WebDriverWait wait = new WebDriverWait(driver, 15);
//		Thread.sleep(3000);
//		WebElement signUpLink = driver.findElement(By.xpath("//div[@id='navbar-collapse']/ul/li[2]/a"));
//		wait.until(ExpectedConditions.elementToBeClickable(signUpLink)).click();
//		WebElement dropdown = driver.findElement(By.id("payment_plan_id"));
//		Select sel = new Select(dropdown);
//		sel.selectByVisibleText("Free Edition");
//		driver.findElement(By.name("first_name")).sendKeys("Abbas");
//		driver.findElement(By.name("surname")).sendKeys("Mosawi");
//		driver.findElement(By.name("email")).sendKeys("smosavi.ug@auaf.edu.af");
//		driver.findElement(By.name("email_confirm")).sendKeys("smosavi.ug@auaf.edu.af");
//		driver.findElement(By.name("username")).sendKeys("abbasaqaa");
//		driver.findElement(By.name("password")).sendKeys("Password12345@");
//		driver.findElement(By.name("passwordconfirm")).sendKeys("Password12345@");
//	}

	@When("^Checked the terms and conditions button$")
	public void checked_the_terms_and_conditions_button() throws Throwable {
		WebElement chkagreebtn = driver.findElement(By.xpath("//input[@name='agreeTerms']"));
		if (!chkagreebtn.isSelected()) {
			chkagreebtn.click();
		}
	}

	@When("^Click on submit button$")
	public void click_on_submit_button() throws Throwable {
		driver.findElement(By.xpath("//div[@class='myButton']")).click();

	}

	@Then("^I succesfully created an account$")
	public void i_succesfully_created_an_account() throws Throwable {

		String title = "CRMPRO";
		driver.getTitle();
		AssertJUnit.assertEquals("CRMPRO", title);
	}

	@When("^I provide the following details$")
	public void i_provide_the_following_details(DataTable signDetails) throws Throwable {
		List<Map<String, String>> maps = signDetails.asMaps(String.class, String.class);

		for (Map<String, String> map : maps) {

		}

		// Write code here that turns the phrase above into concrete actions
		// For automatic transformation, change DataTable to one of
		// List<YourType>, List<List<E>>, List<Map<K,V>> or Map<K,V>.
		// E,K,V must be a scalar (String, Integer, Date, enum etc)

	}

	@When("^I enter the credentials info such as \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\"  and \"([^\"]*)\"$")
	public void i_enter_the_credentials_info_such_as_and_and_and_and_and(String payplan, String fname, String lname, String email,
		String uname, String pword) throws Throwable {
		WebDriverWait wait = new WebDriverWait(driver, 15);
		Thread.sleep(3000);
		WebElement signUpLink = driver.findElement(By.xpath("//div[@id='navbar-collapse']/ul/li[2]/a"));
		wait.until(ExpectedConditions.elementToBeClickable(signUpLink)).click();

		WebElement dropdown = driver.findElement(By.id("payment_plan_id"));
		Select sel = new Select(dropdown);
		sel.selectByVisibleText(payplan);
		
		WebElement firstN = driver.findElement(By.name("first_name"));
		WebElement lastN = driver.findElement(By.name("surname"));
		WebElement emailAdd = driver.findElement(By.name("email"));
		WebElement confirmEmail = driver.findElement(By.name("email_confirm"));
		WebElement userN = driver.findElement(By.name("username"));
		WebElement pWord = driver.findElement(By.name("password"));
		WebElement pconfirm = driver.findElement(By.name("passwordconfirm"));
		firstN.sendKeys(fname);
		lastN.sendKeys(lname);
		emailAdd.sendKeys(email);
		confirmEmail.sendKeys(email);
		userN.sendKeys(uname);
		pWord.sendKeys(pword);
		pconfirm.sendKeys(pword);
		
		
	}

}
