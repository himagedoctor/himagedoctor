Template.profile_edit.helpers
	profile: ->
		Meteor.user().profile if Meteor.user()


Template.profile_edit.events
	'click button.submit': ->
		data = 
			fullname: $('#fullname').val()
			phone: $('#phone').val()
			address: $('#address').val()
			company: $('#company').val()
			bio: $('#bio').val()

		Meteor.users.update Meteor.userId(),
			$set: {profile: data}

		Router.go('/profile')
