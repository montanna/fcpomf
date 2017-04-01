var database = firebase.database();
var eventsList = firebase.database().ref('events');
EventsViewModel = function() {

    var self = this;
    self.events = ko.observableArray([{
        eventTitle: "Check back later for more information on upcoming events.",
        eventDescription: "",
        eventDate: "",
        eventTimeStart: "",
        eventTimeEnd: "",
        eventLocation: "",
        eventLink: ""
    }]);

    self.ref = firebase.database().ref("eventList");
    self.events.pop();
    self.ref.on('value', function(snapshot) {
        self.events([]);
        snapshot.forEach(function(childSnapshot) {
            var childKey = childSnapshot.key;
            var childData = childSnapshot.val();
            self.events.push(childData);
        });
    });

    self.parseDate = function(eventDate) {
        var year = eventDate.substr(0, 4);
        var month = eventDate.substr(5, 6);
        month = month.substr(0, 2);
        var day = eventDate.substr(8, 9);

        return (month + "/" + day + "/" + year);
    };

    self.parseTime = function(eventTime) {
        var hour = eventTime.substr(0, 2);
        if (hour < 12) return (hour + " AM");
        else {
            if (hour == 12) return "12 PM";
            else {
                hour -= 12;
                return (hour + " PM");
            }
        }
    }

    /*
        self.events = [,
        ]
        */


    /*
        for (var i = 0; i < self.events.length; i++) {
            eventsList.push(self.events[i]);
        }
        */
}
