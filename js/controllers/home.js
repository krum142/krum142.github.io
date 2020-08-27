import { getUserInfo, getAllMovies } from '../data.js';

export default async function home(){
     this.partials = {
        header: await this.load("./templates/header.hbs"),
        footer: await this.load("./templates/footer.hbs"),
        movies: await this.load("./templates/movies.hbs"),
        movie: await this.load("./templates/movie.hbs"),
     }
    const obj = getUserInfo();
    const movies = await getAllMovies();
    obj.movies = movies;
    obj.anyMovies = movies.length > 0;

    this.partial("./templates/home.hbs", obj);
}
