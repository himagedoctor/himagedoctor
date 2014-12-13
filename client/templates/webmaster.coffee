Session.setDefault 'editingNews', null


Template.webmaster.helpers
	news: ->
		Sections.findOne(name: 'news')
	editingNews: ->
		Session.get 'editingNews'

Template.webmaster.events
	'click button#editNews': ->
		Session.set 'editingNews', true
	'click button#cancelEditNews': ->
		Session.set 'editingNews', null
	'click button#submitNews': ->
		Sections.update @_id,
			$set:
				content: $('#news').val()
		Session.set 'editingNews', null

