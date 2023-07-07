import { APIRequestContext, BrowserContext, Page, request } from "@playwright/test";
import TodoApi from "../apis/TodoApi";
import User from "../models/User";

export default class NewTodoPage{
    private get newTodoName() {return '[data-testid="new-todo"]'}
    private get submitTodo() {return '[data-testid="submit-newTask"]'}
    async load(page: Page) {
        await page.goto('/todo/new')
    }

    async addTodo(page: Page, task: string){
        await page.type(this.newTodoName, task)
        await page.click(this.submitTodo)
    }

    async addTodoWithApi(request: APIRequestContext, user: User) {
        await new TodoApi().addTodo(request, user)
    }
}