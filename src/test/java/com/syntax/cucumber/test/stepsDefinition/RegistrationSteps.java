package com.syntax.cucumber.test.stepsDefinition;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.AssertJUnit;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class RegistrationSteps {
	WebDriver driver;

	@Given("^open the browser$")
	public void open_the_browser() throws Throwable {
		System.setProperty("webdriver.chrome.driver", ".\\src\\test\\resources\\drivers\\chromedriver.exe");
		driver= new ChromeDriver();
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		driver.manage().timeouts().pageLoadTimeout(10, TimeUnit.SECONDS);
		driver.manage().window().maximize();
	}

	@When("^I navigate to the FreeCrm$")
	public void i_navigate_to_the_FreeCrm() throws Throwable {
		driver.get("http://freeCrm.com");
	}

	@When("^I enter the credentials info$")
	public void i_enter_the_credentials_info() throws Throwable {

		WebDriverWait wait = new WebDriverWait(driver, 15);
		Thread.sleep(3000);
		WebElement signUpLink = driver.findElement(By.xpath("//div[@id='navbar-collapse']/ul/li[2]/a"));
		wait.until(ExpectedConditions.elementToBeClickable(signUpLink)).click();
		WebElement dropdown = driver.findElement(By.id("payment_plan_id"));
		Select sel = new Select(dropdown);
		sel.selectByVisibleText("Free Edition");
		driver.findElement(By.name("first_name")).sendKeys("Abbas");
		driver.findElement(By.name("surname")).sendKeys("Mosawi");
		driver.findElement(By.name("email")).sendKeys("smosavi.ug@auaf.edu.af");
		driver.findElement(By.name("email_confirm")).sendKeys("smosavi.ug@auaf.edu.af");
		driver.findElement(By.name("username")).sendKeys("abbasaqaa");
		driver.findElement(By.name("password")).sendKeys("Password12345@");
		driver.findElement(By.name("passwordconfirm")).sendKeys("Password12345@");
	}

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

}
