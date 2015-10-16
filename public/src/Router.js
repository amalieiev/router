define(function (require) {
    var Backbone = require('backbone'),
        $ = require('jquery'),
        LayoutView = require('layout/LayoutView');

    var Router = Backbone.Router.extend({

        initialize: function () {
            $('body').html(new LayoutView().render().$el);
        },

        routes: {
            //login
            'login.html': 'login',
            //home
            'flow.html?_flowId=homeFlow': 'home',
            //library
            'flow.html?_flowId=searchFlow&mode=library': 'library',
            'flow.html?_flowId=searchFlow': 'repository',
            'flow.html?_flowId=logEventFlow': 'messages',
            //otherwise
            '*otherwise': 'home'
        },

        login: function () {
            var LoginView = require('login/LoginView');
            this.render(new LoginView());
        },

        home: function () {
            var HomeView = require('home/HomeView');
            this.render(new HomeView());
            //replace url
            this.navigate('flow.html?_flowId=homeFlow');
        },

        library: function () {
            var LibraryView = require('home/library/LibraryView');
            this.render(new LibraryView());
        },

        repository: function () {
            var RepositoryView = require('home/library/repository/RepositoryView');
            this.render(new RepositoryView());
        },

        messages: function () {
            var MessagesView = require('home/library/messages/MessagesView');
            this.render(new MessagesView());
        },

        otherwise: function () {
            var HomeView = require('home/HomeView');
            this.render(new HomeView());
        },

        //remove previous view end then render new one into content block.
        render: function (view) {
            this.current && this.current.remove();
            this.current = view;
            this.current.render();
            this.current.$el.appendTo('.content');
        }
    });

    return Router;
});