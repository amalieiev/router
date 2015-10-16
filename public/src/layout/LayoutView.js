define(function (require) {
    var Backbone = require('backbone'),
        _ = require('underscore'),
        $ = require('jquery'),
        BaseView = require('common/BaseView'),
        LayoutTemplate = require('text!./LayoutTemplate.html');

    require('css!./layout');

    return BaseView.extend({
        template: _.template(LayoutTemplate)
    });
});