Router.configure 
	layoutTemplate: 'layout'
	onAfterAction: ->
		document.title = '仁美仁爱'

Router.route '/', ->
	@render 'home'
	return

Router.route '/profile', ->
	@render 'profile'
	return

Router.route '/profile/edit', ->
	@render 'profile_edit'
	return

Router.route '/webmaster', ->
	@render 'webmaster'
	return

Router.route '/admin/accounts',
	template: 'accountsAdmin',
	onBeforeAction: ->
		@redirect('/') unless Roles.userIsInRole(Meteor.user(), ['admin'])
		@next()


