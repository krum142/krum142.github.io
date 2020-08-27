import { deleteMovie } from '../data.js';
import { showInfo } from '../notifications.js';

export default async function deleteMyMovie(){
    await deleteMovie(this.params.id);
    showInfo("Deleted Successfully");
    this.redirect("#/home");
}