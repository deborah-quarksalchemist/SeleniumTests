const { Builder, By, until } = require("selenium-webdriver");

const assert = require("assert");

async function firstTest() {
  // launch the browser
  let driver = await new Builder().forBrowser("chrome").build();

  try {
    // navigate to a my app
    await driver.get("http://localhost:3000/");

    //search for the sign in button
    await driver.findElement(By.id("sign-in-btn")).click();
    //wait for the login page to load
    await driver.wait(until.urlContains("/es/login"));
    //enter user
    await driver
      .wait(until.elementLocated(By.id("input-user")), 10000)
      .sendKeys("testus1@gmail.com");
    //enter password
    await driver
      .wait(until.elementLocated(By.id("password")), 10000)
      .sendKeys("Hola91");
    //click and login
    await driver.findElement(By.id("login-button")).click();
    //redirect to the home page
    await driver.wait(until.urlContains("/es"));
    //search for hero title
    await driver.wait(until.elementLocated(By.id("hero-title")), 10000);
  } finally {
    await driver.quit();
  }
}

firstTest();
