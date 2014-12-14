Meteor.startup ->
  # create roles 
  Roles.createRole "webmaster"  unless Meteor.roles.findOne(name: "webmaster")
  Roles.createRole "blogAdmin"  unless Meteor.roles.findOne(name: "blogAdmin")
  Roles.createRole "blogAuthor"  unless Meteor.roles.findOne(name: "blogAuthor")
  
  # bootstrap the admin user if they exist
	unless Meteor.roles.findOne(name: "admin")
		Roles.createRole "admin"
		admin = Meteor.users.findOne(emails: {$elemMatch: {address: "johannchen@gmail.com"}}) 
		Roles.addUsersToRoles admin._id, ["admin", "blogAdmin", "webmaster"]

	unless Sections.findOne(name: "news")
		Sections.insert
			name: 'news'
			content: 'news update here'
		
  
  return
