define(function (require) {
    var Backbone = require('backbone'),
        _ = require('underscore'),
        $ = require('jquery'),
        BaseView = require('common/BaseView'),
        RepositoryTemplate = require('text!./RepositoryTemplate.html');

    require('css!./repository');

    return BaseView.extend({
        className: 'repository',
        template: _.template(RepositoryTemplate)
    });
});