require(['Router'], function (Router) {
    window.router = new Router();
    Backbone.history.start({ pushState:true });
});