Router.configure layoutTemplate: 'layout'

Router.route '/', ->
	@render 'home'
	return

Router.route '/profile', ->
	@render 'profile'
	return

Router.route '/profile/edit', ->
	@render 'profile_edit'
	return




