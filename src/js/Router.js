define(function (require) {
    var Backbone = require('backbone'),
        $ = require('jquery'),
        LayoutView = require('layout/LayoutView');

    var Router = Backbone.Router.extend({

        initialize: function () {
            $('body').append(new LayoutView().render().$el);
        },

        routes: {
            //login
            'login': 'login',
            //repository
            'repository': 'repository',
            //adhoc
            'adhoc': 'adhoc',
            //otherwise
            '*otherwise': 'login'
        },

        login: function () {
            this.navigate('login');

            require(['login/LoginView'], function (LoginView) {
                this.render(new LoginView());
            }.bind(this));
        },

        repository: function () {
            require(['repository/RepositoryView'], function (RepositoryView) {
                this.render(new RepositoryView());
            }.bind(this));
        },

        adhoc: function () {
            require(['adhoc/AdhocView'], function (AdhocView) {
                this.render(new AdhocView());
            }.bind(this));
        },

        render: function (view) {
            this.current && this.current.remove();
            this.current = view;
            this.current.render();
            this.current.$el.appendTo('.content');
        }
    });

    return Router;
});