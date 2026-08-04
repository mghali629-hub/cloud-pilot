import { test, expect } from '@playwright/test';

test.describe('CloudPilot SaaS E2E Automation Suite', () => {
  test('should load cloud landing page', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('text=CloudPilot')).toBeVisible();
  });

  test('should navigate to dashboard cluster telemetry', async ({ page }) => {
    await page.goto('/dashboard');
    await expect(page.locator('text=Live Cluster Telemetry Dashboard')).toBeVisible();
  });

  test('should navigate to integrations directory', async ({ page }) => {
    await page.goto('/integrations');
    await expect(page.locator('text=Native Cloud Integrations')).toBeVisible();
  });

  test('should navigate to features module page', async ({ page }) => {
    await page.goto('/features');
    await expect(page.locator('text=Autonomous Cloud Architecture')).toBeVisible();
  });
});
