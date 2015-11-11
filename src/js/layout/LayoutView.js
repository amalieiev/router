define(function (require) {
    var Backbone = require('backbone'),
        _ = require('underscore'),
        $ = require('jquery'),
        BaseView = require('./BaseView'),
        LayoutTemplate = require('text!./LayoutTemplate.html');

    return BaseView.extend({
        className: 'layout',
        template: _.template(LayoutTemplate)
    });
});