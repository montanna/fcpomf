var user = firebase.auth().currentUser;
var timelineVM = new OfficersViewModel;
var editor, ref;

//Custom binding handler
// Redundant now that ckeditor is being used
/*
ko.bindingHandlers.editableText = {
    init: function(element, valueAccessor) {
        $(element).on('blur', function() {
            var observable = valueAccessor();
            observable($(this).text());
        });
    },
    update: function(element, valueAccessor) {
        var value = ko.utils.unwrapObservable(valueAccessor());
        $(element).text(value);
    }
};

*/

Submit = function(username, pass) {
    firebase.auth().signInWithEmailAndPassword(username, pass).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage);
    });
    $(".loginBox").addClass("animated flipOutX");
    $(".check").addClass("animated flipInX");
    $(".loginBox").hide();
    $(".check").show();
    user = firebase.auth().currentUser;
    if (user) {
        /*
       
        */
        $(".editBanner").show();
        $(".editBtn").css("display", "block");

        //TESTING ONLY
    }
};

LoginVM = function() {
    var self = this;
    self.user = ko.observable("");
    self.pass = ko.observable("");

    self.submit = function() {
        Submit(self.user(), self.pass());
    }

    self.signUp = function() {
        firebase.auth().createUserWithEmailAndPassword(self.user(), self.pass()).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
        });
    }


};

HomeVM = function() {
    var self = this;
    self.homeNotification = ko.observable("");
    self.homeNotificationFromFB = firebase.database().ref("homeNotification"); //get reference to the homeNotification on firebase
    self.homeNotificationFromFB.on('value', function(snapshot) {
        self.homeNotification(snapshot.val());
    });

}

AboutVM = function() {
    self.aboutUs = ko.observable("");
    self.aboutUsRef = firebase.database().ref("aboutUs"); //get reference to the homeNotification on firebase
    self.aboutUsRef.on('value', function(snapshot) {
        self.aboutUs(snapshot.val());
    });

}

function initControls() {
    $(".navbar-header").on("click", function() {
        if ($(".navbar-collapse").hasClass("collapse")) {
            $(".navbar-collapse").removeClass("collapse");
        } else {
            $(".navbar-collapse").addClass("collapse");
        }
    });
    /*scrolling*/
    $(".section1Btn").on("click", function() {
        $("html,body").animate({
            scrollTop: $("#section1").offset().top - 50
        }, 0);
        $(".active").removeClass("active");
        $(".section1Btn").addClass("active");
        $(".modal").hide();
        $(".navbar-header").click();
    });

    $(".section2Btn").on("click", function() {
        $("html,body").animate({
            scrollTop: $("#section2").offset().top - 50
        }, 0);
        $(".active").removeClass("active");
        $(".section2Btn").addClass("active");
        $(".modal").hide();
        $(".navbar-header").click();
    });

    $(".section3Btn").on("click", function() {
        $("html,body").animate({
            scrollTop: $("#section3").offset().top - 50
        }, 0);
        $(".active").removeClass("active");
        $(".section3Btn").addClass("active");
        $(".modal").hide();
        $(".navbar-header").click();
    });

    $(".section4Btn").on("click", function() {
        $("html,body").animate({
            scrollTop: $("#section4").offset().top - 50
        }, 0);
        $(".active").removeClass("active");
        $(".section4Btn").addClass("active");
        $(".modal").hide();
        $(".navbar-header").click();
    });

    $(".section5Btn, .sponsorDetails").on("click", function() {
        $("html,body").animate({
            scrollTop: $("#section5").offset().top - 50
        }, 0);
        $(".active").removeClass("active");
        $(".section5Btn").addClass("active");
        $(".modal").hide();
        $(".navbar-header").click();
    });

    $(".section6Btn").on("click", function() {
        $("html,body").animate({
            scrollTop: $("#section6").offset().top - 50
        }, 0);
        $(".active").removeClass("active");
        $(".section6Btn").addClass("active");
        $(".modal").hide();
        $(".navbar-header").click();
    });

    $(".section7Btn").on("click", function() {
        $("html,body").animate({
            scrollTop: $("#section7").offset().top - 50
        }, 0);
        $(".active").removeClass("active");
        $(".section7Btn").addClass("active");
        $(".modal").hide();
        $(".navbar-header").click();
    });

    $(".loginBtn").on("click", function() {
        $(".loginModal").show();
    });

    $(".emailLink").on("click", function() {
        $(this).addClass("popover");

    });

    $(".goto6").on("click", function() {
        $(".section6Btn").click();
    });

    $(".close").on("click", function() {
        $(".modal").hide();
    });

    $(".editBtn").on("click", function() {
        var that = this;
        var html;
        // ref is a global variable holding the current reference to firebase we want for the editor.
        // these if/else branches set ref according to which edit button was clicked to 
        // trigger this event handler.
        if ($(that).hasClass("editBtnHomeNotification")) {
            ref = firebase.database().ref("homeNotification");
            html = $("#homeNotificationH").html();
        } else if ($(that).hasClass("editBtnAboutUs")) {
            ref = firebase.database().ref("aboutUs");
            html = $("#aboutUs").html();

        }

        $(".editModal").show();
        editor = CKEDITOR.replace('editor');
        editor.setData(html);

    });

    $(".saveBtn").on("click", function() {
        var myHTML = editor.getData(); //get rich text editor data 
        ref.set(myHTML); //send the rich text editor data to firebase (assuming the value of ref has not changed lol globals suck)
    })

}

/*make sure the correct nav link displays as active*/
$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height < $("#section2").offset().top - 100) {
        $(".active").removeClass("active");
        $(".section1Btn").addClass("active");
    } else if (height < $("#section3").offset().top - 100) {
        $(".active").removeClass("active");
        $(".section2Btn").addClass("active");
    } else if (height < $("#section4").offset().top - 100) {
        $(".active").removeClass("active");
        $(".section3Btn").addClass("active");
    } else if (height < $("#section5").offset().top - 100) {
        $(".active").removeClass("active");
        $(".section4Btn").addClass("active");
    } else if (height < $("#section6").offset().top - 100) {
        $(".active").removeClass("active");
        $(".section5Btn").addClass("active");
    }
    //else if (height < $("#section7").offset().top - 100) {
    //    $(".active").removeClass("active");
    //    $(".section6Btn").addClass("active");
    //}
    else {
        $(".active").removeClass("active");
        $(".section7Btn").addClass("active");
    }




});

$(document).ready(function() {

    $(".modal").hide(); //go away you pesky modals
    ko.applyBindings(timelineVM, $("#section4")[0]);

    var loginVM = new LoginVM;
    ko.applyBindings(loginVM, $(".loginModal")[0]);

    var homeVM = new HomeVM;
    ko.applyBindings(homeVM, $(".homeNotification")[0]);

    var aboutVM = new AboutVM;
    ko.applyBindings(aboutVM, $("#section2")[0]);

    var boardVM = new BoardViewModel;
    ko.applyBindings(boardVM, $("#section3")[0]);

    var galleryVM = new GalleryViewModel;
    ko.applyBindings(galleryVM, $("#section5")[0]);

    var eventsVM = new EventsViewModel;
    ko.applyBindings(eventsVM, $("#section6")[0]);

    initControls();

})
