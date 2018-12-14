package stepsDefinition;

import static org.testng.Assert.assertEquals;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.AssertJUnit;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import utils.BaseClass;

public class LoginSteps extends BaseClass {


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

	

	}

	@Then("^I did NOT successfully logged in$")
	public void i_did_NOT_successfully_logged_in() throws Throwable {

		System.out.println("Login Couldnt take place");
	}

	@Then("^I close the browser$")
	public void i_close_the_browser() throws Throwable {
		driver.close();
	}

	@When("^I enter \"([^\"]*)\" and \"([^\"]*)\"$")
	public void i_enter_and(String usern, String pwd) throws Throwable {
		WebElement userN = driver.findElement(By.xpath("//input[@placeholder='Username']"));
		WebElement pass = driver.findElement(By.xpath("//input[@placeholder='Password']"));

		userN.sendKeys(usern);
		pass.sendKeys(pwd);
		Thread.sleep(5000);
	}

	@When("^I enter valid username and invalid password$")
	public void i_enter_valid_username_and_invalid_password() throws Throwable {

	}

	@Then("^seeing the sign up link$")
	public void seeing_the_sign_up_link() throws Throwable {
		WebDriverWait wait = new WebDriverWait(driver, 15);
		Thread.sleep(3000);
		WebElement signUpLink = driver.findElement(By.xpath("//div[@id='navbar-collapse']/ul/li[2]/a"));
		boolean signup = wait.until(ExpectedConditions.elementToBeClickable(signUpLink)).isDisplayed();
		AssertJUnit.assertTrue(signup);

	}

}
