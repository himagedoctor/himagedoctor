Session.setDefault 'isEditingEvent', null

Session.setDefault 'lastModDate', null

Template.appointmentModal.helpers
	lastModDate: ->
		Session.get 'lastModDate'

Template.appointmentModal.events
	'click button#save': ->
		Appointments.insert
			title: $('#title').val()
			start: Session.get 'lastModDate'
			createdBy: Meteor.userId()
			createdAt: new Date()
		$('#appointmentModal').modal('hide')

		
Template.calendar.helpers
	calendarOptions:
		id: 'calendar'
		header:
			left: 'prev,next today'
			center: 'title'
			right: 'month,agendaWeek,agendaDay'
		defaultView: 'agendaWeek'
		selectable: true
		selectHelper: true

		select: (start, end) ->
			title = prompt('Appointment Title:')
			if title
				appointment =
					title: title
					start: start.toISOString()
					end: end.toISOString()
					createdBy: Meteor.userId()
					createdAt: new Date()
				console.log(appointment)
				Appointments.insert(appointment)
				# reactive, no need to rerender manually
				#$('#calendar').fullCalendar('renderEvent', appointment, true)
			$('#calendar').fullCalendar('unselect')

			#Session.set 'lastModDate', date.format()
			#$('#appointmentModal').modal('show')
		events: (start, end, timezone, callback) ->
			appointments = []

			Appointments.find().forEach (appt) ->
				apptDetails = {}
				for key of appt
					apptDetails[key] = appt[key]
				appointments.push(apptDetails)
				return
			callback(appointments)
