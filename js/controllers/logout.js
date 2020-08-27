import { logout as apiLogout } from '../data.js';
import { showInfo } from '../notifications.js';

export default async function logout(){
    await apiLogout();
    this.redirect("#/home");
    showInfo("Successful logout")

}