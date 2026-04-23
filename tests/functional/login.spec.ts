import { test, expect } from "@playwright/test";

test.describe("Login functionality", () => {
  
  test.beforeEach(async ({ page }) => {
    await page.goto("https://katalon-demo-cura.herokuapp.com/");
    await expect(page).toHaveTitle("CURA Healthcare Service");
    await expect(page.locator("//h1")).toHaveText("CURA Healthcare Service");
    await page.getByRole("link", { name: "Make Appointment" }).click();
  });

  test("Should login with valid credentials", async ({ page }) => {
    await page.getByLabel("Username").fill("John Doe");
    await page.getByLabel("Password").fill("ThisIsNotAPassword");
    await page.getByRole("button", { name: "Login" }).click();
  });

  test("Should login with invalid credentials", async ({ page }) => {
    await page.getByLabel("Username").fill("John Dawson");
    await page.getByLabel("Password").fill("ThisIsNotAPasswords");
    await page.getByRole("button", { name: "Login" }).click();
  });

});