define(function (require) {
    var Backbone = require('backbone'),
        _ = require('underscore'),
        $ = require('jquery'),
        BaseView = require('common/BaseView'),
        HomeTemplate = require('text!./HomeTemplate.html');

    require('css!./home');

    return BaseView.extend({
        className: 'home',
        template: _.template(HomeTemplate)
    });
});