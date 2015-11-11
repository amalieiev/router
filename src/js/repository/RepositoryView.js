define(function (require) {
    var Backbone = require('backbone'),
        _ = require('underscore'),
        $ = require('jquery'),
        BaseView = require('layout/BaseView'),
        RepositoryTemplate = require('text!./RepositoryTemplate.html');

    return BaseView.extend({
        template: _.template(RepositoryTemplate)
    });
});