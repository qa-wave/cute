import { expect, test } from "@playwright/test";

test.describe("cute — homepage", () => {
  test("loads and renders the hero headline", async ({ page }) => {
    const response = await page.goto("/");
    expect(response?.ok()).toBeTruthy();
    await expect(
      page.getByRole("heading", { name: /cute things, shipped clean/i }),
    ).toBeVisible();
  });

  test("has the expected document title", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/cute\.qawave\.ai/i);
  });
});
