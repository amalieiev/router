define(function (require) {
    var Backbone = require('backbone'),
        _ = require('underscore'),
        $ = require('jquery'),
        BaseView = require('common/BaseView'),
        MessagesTemplate = require('text!./MessagesTemplate.html');

    require('css!./messages');

    return BaseView.extend({
        className: 'messages',
        template: _.template(MessagesTemplate)
    });
});