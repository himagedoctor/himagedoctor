Meteor.publish 'sections', ->
	Sections.find()

Meteor.publish 'appointments', ->
	Appointments.find()

