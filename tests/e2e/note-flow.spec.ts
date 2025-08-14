import { test, expect } from '@playwright/test';

test.describe('Note Management Flow', () => {
  test('Create, edit, and delete a note', async ({ page }) => {
    // Navigate to the application
    await page.goto('http://localhost:3000');

    // Create a new note
    await page.click('text=New Note');
    await page.fill('textarea[name="noteContent"]', 'This is a test note.');
    await page.click('text=Save');

    // Verify the note is created
    const note = await page.locator('text=This is a test note.');
    await expect(note).toBeVisible();

    // Edit the note
    await note.click();
    await page.fill(
      'textarea[name="noteContent"]',
      'This is an edited test note.',
    );
    await page.click('text=Save');

    // Verify the note is edited
    const editedNote = await page.locator('text=This is an edited test note.');
    await expect(editedNote).toBeVisible();

    // Delete the note
    await editedNote.click('text=Delete');
    await page.click('text=Confirm');

    // Verify the note is deleted
    await expect(editedNote).not.toBeVisible();
  });
});
