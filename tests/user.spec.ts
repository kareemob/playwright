
import {expect, test} from '@playwright/test'
import User from '../models/User'
import SignupPage from '../pages/SignupPage';
import todoPage from '../pages/TodoPage';
import TodoPage from '../pages/TodoPage';

test("should be able to register", async ({page}) =>{
    const user = new User();
    const signupPage = new SignupPage();
    const todoPage = new TodoPage();
    await signupPage.load(page)
    await signupPage.signup(page, user)
    const welcomeMessage = todoPage.getWelcomeMessageElement(page);
    await expect(welcomeMessage).toBeVisible()
})


