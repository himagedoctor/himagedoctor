@Appointments = new Mongo.Collection('appointments')

@Appointments.allow
	insert: (userId, appointment) ->
		Roles.userIsInRole(userId, ['admin', 'webmaster'])
		
