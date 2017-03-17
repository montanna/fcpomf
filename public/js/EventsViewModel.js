var database = firebase.database();
var eventsList = firebase.database().ref('events');
EventsViewModel = function() {

    var self = this;
    self.events = [];

    self.events = [{
            eventTitle: "2017 Fresno County Peace Officer's Memorial",
            eventDate: "5/4/2017",
            eventTime: "12:00 p.m. (Noon)",
            eventLocation: "Courthouse Park - 1100 Van Ness, Fresno",
            eventLink: "http://www.google.com/calendar/event?action=TEMPLATE&dates=20170504T190000Z%2F20170504T210000Z&text=2017%20Fresno%20County%20Peace%20Officer's%20Memorial&location=Courthouse%20Park%20-%201100%20Van%20Ness%2C%20Fresno&details="
        }, {
            eventTitle: "2017 California Peace Officer's Memorial - Candlelight Vigil",
            eventDate: "5/7/2017",
            eventTime: "Dusk",
            eventLocation: "10th Street & Capitol Mall, Sacramento CA",
            eventLink: "http://www.google.com/calendar/event?action=TEMPLATE&dates=20170507T020000Z%2F20170507T030000Z&text=2017%20California%20Peace%20Officer's%20Memorial%20Candlelight%20Vigil&location=10th%20Street%20%26%20Capitol%20Mall%2C%20Sacramento%20CA&details=The%20ceremony%20will%20begin%20at%20dusk.%20"
        }, {
            eventTitle: "2017 California Peace Officer's Memorial - Enrollment Ceremony",
            eventDate: "5/8/2017",
            eventTime: "10:30 a.m.",
            eventLocation: "10th Street & Capitol Mall, Sacramento CA",
            eventLink: "http://www.google.com/calendar/event?action=TEMPLATE&dates=20170508T173000Z%2F20170508T193000Z&text=2017%20California%20Peace%20Officer's%20Memorial%20-%20Enrollment%20Ceremony&location=10th%20Street%20%26%20Capitol%20Mall%2C%20Sacramento%20CA&details="
        },

        {
            eventTitle: "National Law Enforcement Memorial Fund National Police Week Candlelight Vigil",
            eventDate: "5/13/2017",
            eventTime: "8:00 p.m.",
            eventLocation: "National Law Enforcement Memorial, West front of the United States Capitol in Washington, D.C.",
            eventLink: "http://www.google.com/calendar/event?action=TEMPLATE&dates=20170514T030000Z%2F20170514T040000Z&text=National%20Law%20Enforcement%20Memorial%20Fund%20National%20Police%20Week%20Candlelight%20Vigil&location=National%20Law%20Enforcement%20Memorial%20in%20Washington%2C%20D.C.&details="
        }, {
            eventTitle: "National Law Enforcement Memorial Fund 35th Annual National Peace Officer's Memorial Day Services ",
            eventDate: "5/15/2017",
            eventTime: "11:00 a.m.",
            eventLocation: "West lawn of the United States Capitol in Washington, D.C.",
            eventLink: "http://www.google.com/calendar/event?action=TEMPLATE&dates=20160513T180000Z%2F20160513T200000Z&text=National%20Law%20Enforcement%20Memorial%20Fund%2034th%20Annual%20National%20Peace%20Officer's%20Memorial%20Day%20Services%20&location=West%20Front%20of%20the%20United%20States%20Capitol%20in%20Washington%2C%20D.C.&details="
        },
    ]

    if (self.events.length < 1) {
        self.events.push({
            eventTitle: "Check back later for more information on upcoming events.",
            eventDate: "",
            eventTime: "",
            eventLocation: "",
            eventLink: ""
        });
    }
    /*
        for (var i = 0; i < self.events.length; i++) {
            eventsList.push(self.events[i]);
        }
        */
}
