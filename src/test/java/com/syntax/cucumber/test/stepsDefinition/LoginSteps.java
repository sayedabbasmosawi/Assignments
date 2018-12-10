package com.syntax.cucumber.test.stepsDefinition;

import static org.testng.Assert.assertEquals;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginSteps {
	WebDriver driver;

	@Given("^I open Browser$")
	public void i_open_Browser() throws Throwable {
		System.setProperty("webdriver.chrome.driver", ".\\src\\test\\resources\\drivers\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		driver.manage().timeouts().pageLoadTimeout(30, TimeUnit.SECONDS);
	}

	@Given("^I navigate to FreeCrm$")
	public void i_navigate_to_Free_CRM() throws Throwable {

		String url = "https://www.freecrm.com/index.html";
		driver.get(url);
	}

	@When("^I enter valid username and password$")
	public void i_enter_valid_username_and_password() throws Throwable {
		driver.findElement(By.xpath("//input[@placeholder='Username']")).sendKeys("abbasaqa");
		driver.findElement(By.xpath("//input[@placeholder='Password']")).sendKeys("kowkabjoon");
		Thread.sleep(3000);
	}

	@When("^I click Login button$")
	public void i_click_Login_button() throws Throwable {
		WebElement cllick = driver.findElement(By.xpath("//input[@value='Login']"));
		WebDriverWait wait = new WebDriverWait(driver, 30);
		WebElement element = wait.until(ExpectedConditions.elementToBeClickable(cllick));
		cllick.click();
	}

	@Then("^I successfully logged in$")
	public void i_successfully_logged_in() throws Throwable {
		String logo = "CRMPRO";
		String title = driver.getTitle();
		assertEquals(logo, title);
		System.out.println("Loggin successfully");

		driver.close();

	}

	@When("^I enter invalid username and password$")
	public void i_enter_invalid_username_and_password() throws Throwable {

		WebElement userN = driver.findElement(By.xpath("//input[@placeholder='Username']"));
		WebElement pass = driver.findElement(By.xpath("//input[@placeholder='Password']"));

		userN.sendKeys("abbas");
		pass.sendKeys("kowkab");
		Thread.sleep(3000);
	}

	@Then("^I did NOT successfully logged in$")
	public void i_did_NOT_successfully_logged_in() throws Throwable {

		System.out.println("Loggin failed");
	}

	@Then("^I close the browser$")
	public void i_close_the_browser() throws Throwable {
		driver.close();
	}

}
