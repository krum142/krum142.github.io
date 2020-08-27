import API from './api.js';
import {beginRequest, endRequest} from './notifications.js';

export function getUserInfo() {
    return {
        userToken: localStorage.getItem("userToken"),
        email: localStorage.getItem("email"),
        ownerId: localStorage.getItem("ownerId")
    }
}

const api = new API
    (
        "A4227A33-A264-408C-FF9D-DD397BAE8400",
        "EEFA69E6-12B4-41ED-9533-F707508817EA",
    );

export const login = api.login.bind(api);
export const register = api.register.bind(api);
export const logout = api.logout.bind(api);
export async function add(body){
   return api.post(api.endpoints.CREATE,body)
}
export async function getAllMovies(){
    return api.get(api.endpoints.CREATE);
 }
export async function getMovie(objectId){
    return api.get(api.endpoints.CREATE + `/${objectId}`);
}
export async function editMovie(objectId, body){
    return api.put(api.endpoints.CREATE + `/${objectId}`,body);
}
export async function deleteMovie(objectId){
    return api.delete(api.endpoints.CREATE + `/${objectId}`);
}