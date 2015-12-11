window.helpers = {
    userAccount: function() {
        let userAccount = new Client(Meteor.userId());

        userAccount.getInfo();
        console.log(userAccount.getCalendarAccess());

        return userAccount;
    }
};