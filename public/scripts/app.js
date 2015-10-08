var BaseView = Backbone.View.extend({
    events: {
        'click a': 'onLink'
    },
    onLink: function (event) {
        event.preventDefault();
        router.navigate($(event.target).attr('href'), { trigger:true });
    }
});

var LoginView = BaseView.extend({
    render: function () {
        this.$el.html(_.template($('#login').html())(this.model.attributes));
        return this;
    }
});

var CommonView = BaseView.extend({
    render: function () {
        this.$el.html(_.template($('#common').html())(this.model.attributes));
        return this;
    }
});

var Router = Backbone.Router.extend({
    routes: {
        //login
        'login.html': 'login',
        //home
        'flow.html?_flowId=homeFlow': 'home',
        //library
        'flow.html?_flowId=searchFlow&mode=library': 'library',
        'flow.html?_flowId=searchFlow&mode=search': 'searchResults',
        'flow.html?_flowId=searchFlow': 'repository',
        'flow.html?_flowId=logEventFlow': 'messages',
        'flow.html?_flowId=sampleFlow&page=dialogs': 'uiSamples',
        //manage
        'flow.html?_flowId=tenantFlow': 'manageOrganizations',
        'flow.html?_flowId=userListFlow': 'manageUsers',
        'flow.html?_flowId=roleListFlow': 'manageRoles',
        //create
        'flow.html?_flowId=adhocFlow': 'createAdhoc',
        'dashboard/designer.html': 'createDashboard',
        'flow.html?_flowId=createSLDatasourceFlow&ParentFolderUri=': 'createDomain',
        'flow.html?_flowId=addDataSourceFlow&ParentFolderUri=%2Fdatasources': 'createDatasource',
        //otherwise
        '*otherwise': 'home'
    },

    login: function () {
        this.render('login');
    },

    home: function () {
        this.render('home');
    },

    library: function () {
        this.render('library');
    },

    searchResults: function () {
        this.render('searchResults');
    },

    repository: function () {
        this.render('repository');
    },

    messages: function () {
        this.render('messages');
    },

    uiSamples: function () {
        this.render('uiSamples');
    },

    manageOrganizations: function () {
        this.render('manageOrganizations');
    },

    manageUsers: function () {
        this.render('manageUsers');
    },

    manageRoles: function () {
        this.render('manageRoles');
    },

    createAdhoc: function () {
        this.render('createAdhoc');
    },

    createDashboard: function () {
        this.render('createDashboard');
    },

    createDomain: function () {
        this.render('createDomain');
    },

    createDatasource: function () {
        this.render('createDatasource');

    },

    otherwise: function () {
        this.render('home');
    },

    /**
     * Just inserts into view container specified veiw.
     * @param view
     */
    render: function (route) {
        var model = new Backbone.Model({title: route}),
            view = route === 'login'
                ? new LoginView({model: model})
                : new CommonView({model: model});

        $('.view').html(view.render().$el);
    }
});

var router = new Router();
Backbone.history.start({ pushState:true });