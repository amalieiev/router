define(function (require) {
    var Backbone = require('backbone'),
        _ = require('underscore'),
        $ = require('jquery'),
        BaseView = require('layout/BaseView'),
        AdhocTemplate = require('text!./AdhocTemplate.html');

    return BaseView.extend({
        className: 'login',
        template: _.template(AdhocTemplate)
    });
});