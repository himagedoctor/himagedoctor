@Sections = new Mongo.Collection('sections')

@Sections.allow
	update: (userId, document, fieldNames, modifier) ->
		Roles.userIsInRole(userId, ['admin', 'webmaster'])
