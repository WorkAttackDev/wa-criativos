import { test, expect } from "@playwright/test";
import path from "path";

test.describe("Career Form Tests", () => {
  const testCvPath = path.join(__dirname, "test-cv.pdf");

  test.beforeEach(async ({ page }) => {
    await page.goto("/pt#career");
    await page.waitForSelector("#career", { state: "visible" });
  });

  test("should show validation errors when submitting empty form", async ({
    page,
  }) => {
    await page.getByRole("button", { name: "Enviar" }).click();

    await expect(page.locator("input[name='firstName']")).toHaveAttribute(
      "aria-invalid",
      "true",
    );
    await expect(page.locator("input[name='lastName']")).toHaveAttribute(
      "aria-invalid",
      "true",
    );
    await expect(page.locator("input[name='email']")).toHaveAttribute(
      "aria-invalid",
      "true",
    );
    await expect(page.locator("input[name='phone']")).toHaveAttribute(
      "aria-invalid",
      "true",
    );
    await expect(page.locator("textarea[name='about']")).toHaveAttribute(
      "aria-invalid",
      "true",
    );
  });

  test("should validate all fields according to schema", async ({ page }) => {
    await page.locator("input[name='firstName']").fill("J");
    await page.getByRole("button", { name: "Enviar" }).click();
    await expect(page.locator("input[name='firstName']")).toHaveAttribute(
      "aria-invalid",
      "true",
    );
    await expect(page.getByText("Mínimo 2 caracteres").first()).toBeVisible();

    await page.locator("input[name='email']").fill("invalid-email");
    await expect(page.locator("input[name='email']")).toHaveAttribute(
      "aria-invalid",
      "true",
    );
    await expect(page.getByText("E-mail inválido")).toBeVisible();

    await page.locator("input[name='phone']").fill("123");
    await expect(page.locator("input[name='phone']")).toHaveAttribute(
      "aria-invalid",
      "true",
    );
    await expect(page.getByText("Telefone inválido")).toBeVisible();

    await page.locator("textarea[name='about']").fill("Short");
    await expect(page.locator("textarea[name='about']")).toHaveAttribute(
      "aria-invalid",
      "true",
    );
    await expect(page.getByText("Mínimo 10 caracteres")).toBeVisible();
  });

  test("should successfully submit form with valid data", async ({ page }) => {
    await page.locator("input[name='firstName']").fill("João");
    await page.locator("input[name='lastName']").fill("Silva");
    await page.locator("input[name='email']").fill("joao.silva@gmail.com");
    await page.locator("input[name='phone']").fill("+244923228585");
    await page
      .locator("textarea[name='about']")
      .fill("I am a software developer with 5 years of experience.");

    await page.locator("input[name='cv']").setInputFiles(testCvPath);

    await page.getByRole("button", { name: "Enviar" }).click();

    await page
      .waitForSelector("[data-sonner-toaster='true']", {
        state: "attached",
        timeout: 10000,
      })
      .catch(() => {});

    await expect(page.locator("[data-sonner-toaster='true']")).toContainText(
      "Operação realizada com sucesso",
    );

    await expect(page.locator("input[name='firstName']")).toHaveValue("");
    await expect(page.locator("input[name='lastName']")).toHaveValue("");
    await expect(page.locator("input[name='email']")).toHaveValue("");
    await expect(page.locator("input[name='phone']")).toHaveValue("");
    await expect(page.locator("textarea[name='about']")).toHaveValue("");
  });
});
