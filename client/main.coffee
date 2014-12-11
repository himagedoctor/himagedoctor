if Meteor.isClient
  Blog.config
    blogIndexTemplate: 'blogs' # '/blog' route
    blogShowTemplate: 'blog'   # '/blog/:slug' route
