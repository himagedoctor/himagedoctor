FlowRouter.route('/', {
	action: function(params) {
		BlazeLayout.render('layout', {main: 'home'});
	}
});

FlowRouter.route('/clinic', {
	action: function(params) {
		BlazeLayout.render('layout', {main: 'clinic'});
	}
});

FlowRouter.route('/charity', {
	action: function(params) {
		BlazeLayout.render('layout', {main: 'charity'});
	}
});

FlowRouter.route('/training-long', {
	action: function(params) {
		BlazeLayout.render('layout', {main: 'trainingLong'});
	}
});

FlowRouter.route('/training-short', {
	action: function(params) {
		BlazeLayout.render('layout', {main: 'trainingShort'});
	}
});
