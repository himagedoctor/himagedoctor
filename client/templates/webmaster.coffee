Session.setDefault 'editingNews', null

Template.webmaster.rendered = ->
	###
	# use blog medium editor
	news = Sections.findOne(name: 'news')
	if news?.content
		@$('.editable').html news.content
		@$('.html-editor').html news.content
	# Medium editor
	BlogEditor.make @
	###
	
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

