import { expect, Locator, Page } from '@playwright/test';

export class TodoPage {
  readonly newTodoInput: Locator;
  readonly todoLabels: Locator;

  constructor(readonly page: Page) {
    this.newTodoInput = page.locator('.new-todo');
    this.todoLabels = page.locator('.view label');
  }

  async goto() {
    await this.page.goto('https://demo.playwright.dev/todomvc');
  }

  async addTodo(todo: string) {
    await this.newTodoInput.fill(todo);
    await this.newTodoInput.press('Enter');
  }

  async expectTodos(todos: string[]) {
    await expect(this.todoLabels).toHaveText(todos);
  }
}