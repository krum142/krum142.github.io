import { register as apiRegister,login  } from '../data.js';
import { showError, showInfo } from '../notifications.js';

export default async function register(){
    this.partials = {
        header: await this.load("./templates/header.hbs"),
        footer: await this.load("./templates/footer.hbs"),
    }
     this.partial("./templates/register.hbs", );
}

export async function registerPost(){
    if(this.params.email && this.params.password === this.params.repeatPassword){
        await apiRegister(this.params.email, this.params.password);
        await login(this.params.email, this.params.password);
        showInfo("successful registration");
        this.redirect('#/home');
        return;
    }
    
    showError("email or password is incorrect!");
}