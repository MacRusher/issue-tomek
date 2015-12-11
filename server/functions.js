Meteor.methods({
  getUserByID: function(userId) {
      return Meteor.users.findOne({_id: userId});
  }
});