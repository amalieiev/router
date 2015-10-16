define(function (require) {
    var Backbone = require('backbone'),
        _ = require('underscore'),
        $ = require('jquery'),
        BaseView = require('common/BaseView'),
        LibraryTemplate = require('text!./LibraryTemplate.html');

    require('css!./library');

    return BaseView.extend({
        className: 'library',
        template: _.template(LibraryTemplate)
    });
});