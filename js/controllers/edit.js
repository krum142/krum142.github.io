import {getMovie, getUserInfo, editMovie as edit} from '../data.js';
import { showInfo, showError } from '../notifications.js';

export default async function editMovie(){
    this.partials = {
        header: await this.load("./templates/header.hbs"),
        footer: await this.load("./templates/footer.hbs"),
    }
    const obj = getUserInfo();
    const movie = await getMovie(this.params.id);
    Object.assign(obj,movie);
    this.partial("./templates/edit.hbs", obj);
}

export async function editPost(){
    try {
        const obj = {
            title: this.params.title,
            description: this.params.description,
            imageUrl: this.params.imageUrl
        }
        showInfo("eddited succesffully");
        await edit(this.params.id,obj)
        this.redirect(`#/details/${this.params.id}`);
    } catch (error) {
        showError(error.message);
    }
    
}