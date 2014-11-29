Meteor.startup ->
  
  # bootstrap the admin user if they exist
  Roles.addUsersToRoles "TfSk7GEi6Hs7NpHxn", ["admin", "blogAdmin"]  if Meteor.users.findOne("TfSk7GEi6Hs7NpHxn")
  
  # create roles 
  Roles.createRole "blogAdmin"  unless Meteor.roles.findOne(name: "blogAdmin")
  Roles.createRole "blogAuthor"  unless Meteor.roles.findOne(name: "blogAuthor")
  return