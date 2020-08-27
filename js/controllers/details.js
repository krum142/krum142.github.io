import {getMovie, getUserInfo} from "../data.js";


export default async function details(){
    this.partials = {
        header: await this.load("./templates/header.hbs"),
        footer: await this.load("./templates/footer.hbs"),
    }
    
 
    let info = getUserInfo();
    let movie = await getMovie(this.params.id);
    
    let isOwner = info.ownerId === movie.ownerId;
    let array = movie.userLiked;
    const isLiked = array.some(x => x === info.ownerId);

    Object.assign(info, movie);
    info.isOwner = isOwner;
    info.isLiked = isLiked;
    info.likes = array.length;
    this.partial("./templates/details.hbs", info);
}