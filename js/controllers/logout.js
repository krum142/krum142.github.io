import { logout as apiLogout } from '../data.js';
import { showInfo } from '../notifications.js';

export default async function logout(){
    await apiLogout();
    showInfo("Successful logout")
    this.redirect("#/home");
}