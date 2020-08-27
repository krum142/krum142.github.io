import { getUserInfo,getMovie,editMovie } from '../data.js';
import { showInfo } from '../notifications.js';
export default async function likeMovie(){
    const userInfo = getUserInfo();
    const movie = await getMovie(this.params.id);

    let likedIds = movie.userLiked;
    likedIds.push(userInfo.ownerId);

    const obj = {
        title: movie.title,
        description: movie.description,
        imageUrl: movie.imageUrl,
        userLiked: likedIds
    }
    showInfo("liked succesffully");
    await editMovie(this.params.id,obj)
    this.redirect(`#/details/${this.params.id}`);
}