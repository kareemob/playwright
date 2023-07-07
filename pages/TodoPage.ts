import { Page } from "@playwright/test"


export default class TodoPage{
    private get deleteButton() {return '[data-testid="delete"]'}
    private get welcomeMessage() {return '[data-testid="welcome"]'}
    private get noTodos() {return '[data-testid="no-todos"]'}
    private get todoName() {return '[data-testid="todo-text"]'}

    getWelcomeMessageElement(page: Page) {
        return page.locator(this.welcomeMessage)
    }

    async load(page: Page) {
        return await page.goto('/todo')
    }

    async clickDeleteButton(page: Page) {
        await page.click(this.deleteButton)
    }

    async getNoTodosMessage(page: Page){
        return await page.locator(this.noTodos)
    }

    async getTodoText(page: Page) {
        return await page.locator(this.todoName)
    }
}