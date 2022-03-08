import { test, expect } from '@playwright/test';
import { TodoPage } from './TodoPage';

test.beforeEach(async ({ page }) => {
  await new TodoPage(page).goto();
});

test('should allow me to add todo items', async ({ page }) => {
  const todoPage = new TodoPage(page);

  // Create a todo
  await todoPage.addTodo('buy some cheese');

  // Make sure the list has the todo item
  await todoPage.expectTodos(['buy some cheese']);

  // Create 2nd todo.
  await todoPage.addTodo('feed the cat');

  // Make sure the list now has two todo items.
  await todoPage.expectTodos([
    'buy some cheese',
    'feed the cat',
  ]);
});