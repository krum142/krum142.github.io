import { login as apiLogin } from '../data.js';
import { showInfo } from '../notifications.js';

export default async function login(){
    this.partials = {
        header: await this.load("./templates/header.hbs"),
        footer: await this.load("./templates/footer.hbs"),
    }
    
    this.partial("./templates/login.hbs", );
}

export async function loginPost(){
    await apiLogin(this.params.email, this.params.password);
    showInfo("Logged in successfully");
    this.redirect('#/home');
}