export default class API {
    constructor(appId, apiKey, beginRequest, endRequest) {
        this.appId = appId;
        this.apiKey = apiKey;
        this.endpoints = {
            REGISTER: 'users/register',
            LOGIN: 'users/login',
            LOGOUT: 'users/logout',
            CREATE: 'data/movies'
        }

        this.beginRequest = () => {
            if (beginRequest) {
                beginRequest();
            }
        }
        this.endRequest = () => {
            if (endRequest) {
                endRequest();
            }
        }
    }

    host(endpoints) {
        return `https://api.backendless.com/${this.appId}/${this.apiKey}/${endpoints}`;
    }

    getOptions(headers) {
        const token = localStorage.getItem('userToken');

        const options = { headers: headers || {} };

        if (token !== null) {
            Object.assign(options.headers, { "user-token": token });
        }

        return options;
    }

    async get(endpoint) {
        this.beginRequest();
        const result = (await fetch(this.host(endpoint), this.getOptions()));
        this.endRequest();
        try {
            return await result.json();
        } catch (error) {
            return result;
        }
    }

    async post(endpoint, body){
        const options = this.getOptions({ 'Content-Type': 'application/json'});

        options.method = 'POST';
        options.body = JSON.stringify(body);

        this.beginRequest();
        const result = (await fetch(this.host(endpoint), options)).json();
        this.endRequest();

        return result;
    }

    async put(endpoint, body) {
        const options = this.getOptions({ 'Content-Type': 'application/json' });

        options.method = 'PUT';
        options.body = JSON.stringify(body);

        this.beginRequest();
        const result = (await fetch(this.host(endpoint), options)).json();
        this.endRequest();

        return result;
    }

    async delete(endpoint){
        const options = this.getOptions();

        options.method = 'DELETE';

        this.beginRequest();
        const result = (await fetch(this.host(endpoint), options)).json();
        this.endRequest();

        return result;
    }

    async register(email, password){
        const result =  await this.post(this.endpoints.REGISTER, { 
            email,
            password 
        });

        return result;
    }

    async login(username, password){
        const result = await this.post(this.endpoints.LOGIN, { 
            login: username,
            password 
        });
        if(result.hasOwnProperty("errorData")){
            throw new Error("Login Failed");
        }
        localStorage.setItem('userToken', result['user-token']);
        localStorage.setItem('email', result.email);
        localStorage.setItem('ownerId', result.ownerId);
        return result;
    }

    async logout(){
        const result = await this.get(this.endpoints.LOGOUT);

        localStorage.removeItem("userToken");
        localStorage.removeItem("email");
        localStorage.removeItem("ownerId");
        return result;
    }
}
