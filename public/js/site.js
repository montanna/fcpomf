// Write your Javascript code.

function initControls() {
    /*initialize loupe (js magnifier)*/
    //new Loupe(document.getElementById('memorialImg'));
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

    $(".emailLink").on("click", function() {
        $(".popover").hide();
        $(".popover").remove();
    });

    $(".goto6").on("click", function() {
        $(".section6Btn").click();
    });




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
    var boardVM = new BoardViewModel;
    ko.applyBindings(boardVM, $("#section3")[0]);

    var timelineVM = new OfficersViewModel;
    ko.applyBindings(timelineVM, $("#section4")[0]);

    var galleryVM = new GalleryViewModel;
    ko.applyBindings(galleryVM, $("#section5")[0]);

    var eventsVM = new EventsViewModel;
    ko.applyBindings(eventsVM, $("#section6")[0]);



    /*initialize all popovers*/

    $(function() {
        $('[data-toggle="popover"]').popover()
    });


    initControls();

})
