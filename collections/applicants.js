Applicants = new Mongo.Collection("applicants");

Meteor.methods({
  addApplicant: function(applicant) {
    applicant.createdAt = Date.now();
    Applicants.insert(applicant);
  }
});
