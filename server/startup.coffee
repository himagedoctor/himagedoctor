Meteor.startup ->
  # create roles 
  Roles.createRole "staff"  unless Meteor.roles.findOne(name: "staff")
  Roles.createRole "blogAdmin"  unless Meteor.roles.findOne(name: "blogAdmin")
  Roles.createRole "blogAuthor"  unless Meteor.roles.findOne(name: "blogAuthor")
  
  # bootstrap the admin user if they exist
	admin = Meteor.users.findOne(email: 'johannchen@gmail.com')
	if admin is null
		id = Accounts.createUser(
			email: 'johannchen@gmail.com'
			password: 'changeme2014'
			profile:
				name: 'Johann Chen'
		)
		Roles.addUsersToRoles id, ["admin", "blogAdmin", "staff"]

	unless Sections.findOne(name: "news")
		Sections.insert
			name: 'news'
			content: 'news update here'
		
  
  return
