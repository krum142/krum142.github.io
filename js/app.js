import home from './controllers/home.js';
import login , {loginPost} from './controllers/login.js';
import logout from './controllers/logout.js';
import register , {registerPost} from './controllers/register.js';
import addMovie ,{ addMoviePost }from './controllers/add.js';
import details from './controllers/details.js';
import editMovie, {editPost} from './controllers/edit.js';
import deleteMyMovie from './controllers/delete.js';
import likeMovie from './controllers/like.js';


window.addEventListener("load",function(){
    const sammy = Sammy("#root",function (){
        this.use("Handlebars","hbs");

        this.get("/",home);
        this.get("#/home",home);
        this.get("index.html",home);
        this.get("#/login",login);
        this.get("#/register",register);
        this.get("#/add",addMovie)
        this.get("#/details/:id",details);
        this.get("#/logout",logout);
        this.get("#/edit/:id",editMovie);
        this.get("#/delete/:id", deleteMyMovie);
        this.get("#/like/:id", likeMovie);

        

        this.post("#/add",ctx => {addMoviePost.call(ctx)});
        this.post("#/login", ctx => {loginPost.call(ctx)});
        this.post("#/register", ctx => {registerPost.call(ctx)});
        this.post("#/edit/:id", ctx => {editPost.call(ctx)});


    });

    sammy.run();
})