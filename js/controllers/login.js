import { login as apiLogin } from '../data.js';
import { showInfo, showError } from '../notifications.js';

export default async function login() {
    this.partials = {
        header: await this.load("./templates/header.hbs"),
        footer: await this.load("./templates/footer.hbs"),
    }

    this.partial("./templates/login.hbs",);
}

export async function loginPost() {
    try {
        let response = await apiLogin(this.params.email, this.params.password);
        showInfo("Logged in successfully");
        this.redirect('#/home');
    } catch (error) {
        showError(error.message);
    }
}