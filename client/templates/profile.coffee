Template.profile.helpers
	profile: ->
		Meteor.user().profile if Meteor.user()

