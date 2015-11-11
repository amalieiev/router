define(function (require) {
    var Backbone = require('backbone'),
        _ = require('underscore'),
        $ = require('jquery'),
        BaseView = require('layout/BaseView'),
        LoginTemplate = require('text!./LoginTemplate.html');

    return BaseView.extend({
        className: 'login',
        template: _.template(LoginTemplate)
    });
});