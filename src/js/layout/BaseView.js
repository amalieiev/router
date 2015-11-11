define(function (require) {
    var Backbone = require('backbone'),
        _ = require('underscore'),
        $ = require('jquery');

    return Backbone.View.extend({
        events: {
            'click a': 'onLink'
        },
        onLink: function (event) {
            event.preventDefault();
            router.navigate($(event.target).attr('href'), { trigger:true });
        },
        render: function () {
            this.$el.html(this.template());
            return this;
        }
    });
});