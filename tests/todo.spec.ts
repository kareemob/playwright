import {expect, test} from '@playwright/test'
import User from '../models/User'
import TodoApi from '../apis/TodoApi';
import SignupPage from '../pages/SignupPage';
import TodoPage from '../pages/TodoPage';
import NewTodoPage from '../pages/NewTodoPage';

test("should be able to add todo", async ({page, request, context}) =>{
   const user = new User();
   const todoPage = new TodoPage();
   const newTodoPage = new NewTodoPage();
   const signupPage = new SignupPage();
   await signupPage.signupWithApi(request, user, context);
   newTodoPage.load(page)
   await newTodoPage.addTodo(page, "Learn Playwright");
   const todoText = await todoPage.getTodoText(page);
   expect(await todoText.innerText()).toEqual('Learn Playwright')
})


test("should be able to delete a todo", async ({page, request, context}) =>{
    const user = new User();
    const signupPage = new SignupPage();
    const todoPage = new TodoPage();
    const newTodoPage = new NewTodoPage();
    await signupPage.signupWithApi(request, user, context);
    await newTodoPage.addTodoWithApi(request, user);
    await todoPage.load(page)
    await todoPage.clickDeleteButton(page);
    const noTodo = await todoPage.getNoTodosMessage(page)
    await expect(noTodo).toBeVisible()
})
