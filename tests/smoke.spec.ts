import { test, expect, type Page } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
test.use({ reducedMotion: "reduce" });

async function open(page: Page, path = "/") {
  await page.goto(path);
  await page.locator('html[data-ready="true"]').waitFor();
}

test("home loads with the Build lens by default", async ({ page }) => {
  await open(page);
  await expect(page.getByRole("heading", { level: 1 })).toContainText("ship");
  await expect(page.getByRole("button", { name: "Build" })).toHaveAttribute("aria-pressed", "true");
});

test("toggle switches to the Verify lens and updates the URL", async ({ page }) => {
  await open(page);
  await page.getByRole("button", { name: "Verify" }).click();
  await expect(page.getByRole("heading", { level: 1 })).toContainText("before");
  await expect(page.getByRole("heading", { name: "How I write a test case" })).toBeVisible();
  await expect(page).toHaveURL(/#verify$/);
});

test("deep link to #verify opens the Verify lens", async ({ page }) => {
  await open(page, "/#verify");
  await expect(page.getByRole("button", { name: "Verify" })).toHaveAttribute("aria-pressed", "true");
  await expect(page).toHaveURL(/#verify$/);
});

test("keyboard shortcut v switches lens", async ({ page }) => {
  await open(page);
  await page.keyboard.press("v");
  await expect(page.getByRole("button", { name: "Verify" })).toHaveAttribute("aria-pressed", "true");
});

for (const lens of ["build", "verify"]) {
  test(`no axe violations in ${lens} lens`, async ({ page }) => {
    await open(page, `/#${lens}`);
    const results = await new AxeBuilder({ page }).analyze();
    expect(results.violations).toEqual([]);
  });
}