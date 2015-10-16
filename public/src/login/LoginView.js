define(function (require) {
    var Backbone = require('backbone'),
        _ = require('underscore'),
        $ = require('jquery'),
        BaseView = require('common/BaseView'),
        LoginTemplate = require('text!./LoginTemplate.html');

    require('css!./login');

    return BaseView.extend({
        className: 'login',
        template: _.template(LoginTemplate)
    });
});