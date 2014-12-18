@Sections = new Mongo.Collection('sections')

@Sections.allow
	update: (userId, section, fieldNames, modifier) ->
		Roles.userIsInRole(userId, ['admin', 'webmaster'])
