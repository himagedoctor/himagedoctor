Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', function () {
	this.render('home');
});

Router.route('/admin', {
	path:'/admin',
  template: 'accountsAdmin',
  onBeforeAction: function() {
    if (Meteor.loggingIn()) {
        this.render(this.loadingTemplate);
    } else if(!Roles.userIsInRole(Meteor.user(), ['admin'])) {
        console.log('redirecting');
        this.redirect('/');
    } else {
    	this.next();
    }
  }
});
