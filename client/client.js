Client = class Client {
    constructor(userId) {
        this.userId = userId;
        this.name = null;
        this.email = null;
        this.files = [];
        this.invoices = [];
        this.messages = [];
        this.calendarAccess = 1;
        this.account = 'client';
    }

    getInfo() {
        let self = this;

        console.log(self);
        console.log(self.userId);

        Meteor.call("getUserByID", self.userId, function(err, res) {
            console.log("error: " + err);
            console.log("result: " + res);

            if (res) {
                self.userId = res._id;
                self.name = res.name;
                self.email = res.email;
                self.files = res.files;
                self.invoices = res.invoices;
                self.messages = res.messages;
                self.account = res.account;

                console.log("getUserByID method success");
                console.log(self);
            } else {
                console.log("getUserByID method error");
            }
        });

        return self;
    }

    getFiles() {
        return this.files;
    }

    getInvoices() {
        return this.invoices;
    }

    getMessages() {
        return this.messages;
    }

    getName() {
        return this.name;
    }

    getAccountType() {
        return this.account;
    }

    getCalendarAccess() {
        return this.calendarAccess;
    }

    getEmail() {
        return this.email;
    }

    getId() {
        return this._id;
    }
}