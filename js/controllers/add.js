import {add} from '../data.js';
import {showInfo,showError} from '../notifications.js';


export default async function addMovie(){
    this.partials = {
        header: await this.load("./templates/header.hbs"),
        footer: await this.load("./templates/footer.hbs"),
    }

    this.partial("./templates/add.hbs", );
}

export async function addMoviePost(){
    if(this.params.title && this.params.description && this.params.imageUrl){
        const obj = {
            title: this.params.title,
            description: this.params.description,
            imageUrl: this.params.imageUrl,
            userLiked:[]
        }
        showInfo("Created successfully");
        await add(obj);
        this.redirect("#/home");
        return;
    }
    
    showError("Invalid Inputs!")
}