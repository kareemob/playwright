import { faker } from '@faker-js/faker'

export default class User {
    private firstName: string
    private lastName: string
    private email: string
    private password: string
    private accessToken: string
    private userID: string

    constructor(){
        this.firstName = faker.person.firstName();
        this.lastName = faker.person.lastName();
        this.email = faker.internet.email();
        this.password = "Test123!";
    }

    getFirstName() {return this.firstName}
    getLastName() {return this.lastName}
    getEmail() {return this.email}
    getPassword() {return this.password}
    getaccessToken() {return this.accessToken}
    setAccessToken(accessToken: string) {this.accessToken = accessToken}
    getuserID() {return this.userID}
    setUserID(userID: string) {this.userID = userID}
}