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

    self.selectedEvent = ko.observable(self.events([0]));

    self.selectEvent = function(data, event) {
        self.selectedEvent(data.data);
    }


    self.ref = firebase.database().ref("eventList");
    self.events.pop();
    self.ref.on('value', function(snapshot) {
        self.events([]);
        snapshot.forEach(function(childSnapshot) {
            var childKey = childSnapshot.key;
            var childData = childSnapshot.val();
            self.events.push({ data: childData, key: childKey });
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

    self.clickEdit = function(data, event) {
        var target = event.currentTarget;
        var eventData = data.data;
        self.ref = firebase.database().ref("eventList/" + target.id);
        $(".modal.editEventModal").show();
        $(".modal.editEventModal").addClass("animated fadeIn");
    }

    self.save = function() {
        self.ref.set({
            "eventTitle": self.selectedEvent().eventTitle,
            "eventDescription": self.selectedEvent().eventDescription,
            "eventDate": self.selectedEvent().eventDate,
            "eventTimeStart": self.selectedEvent().eventTimeStart,
            "eventTimeEnd": self.selectedEvent().eventTimeEnd,
            "eventLocation": self.selectedEvent().eventLocation,
            "eventLink": ""
        });
        $(".saveCheck").css("display", "block");
        $(".saveCheck").addClass("animated flipInX");
    }
}
