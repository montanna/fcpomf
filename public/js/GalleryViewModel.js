GalleryViewModel = function() {
    var self = this;
    self.albums = ko.observableArray([]);

    self.selectAlbum = function(data, event) {
        self.selectedAlbum(data);
    };



    self.albums.push({
        albumTitle: "2010 Fresno County Peace Officers Memorial",
        albumID: "2010FCPOM",
        albumLength: 20
    }, {
        albumTitle: "2010 Memorial Cup Challenge",
        albumID: "2010MCC",
        albumLength: 8
    }, {
        albumTitle: "2010 National Law Enforcement Memorial",
        albumID: "2010NLEM",
        albumLength: 9
    }, {
        albumTitle: "2010 Presentation of US Honor Flag",
        albumID: "2010PUSHF",
        albumLength: 25
    }, {
        albumTitle: "2013 Fresno County Peace Officers Memorial",
        albumID: "2013FCPOM",
        albumLength: 18
    }, {
        albumTitle: "2014 Fresno County Peace Officers Memorial",
        albumID: "2014FCPOM",
        albumLength: 23
    }, {
        albumTitle: "Officer Sixto Maldonado Highway Sign Dedication",
        albumID: "MaldonadoHighwaySign",
        albumLength: 8
    }, {
        albumTitle: "Maldonado Park Dedication",
        albumID: "MaldonadoPark",
        albumLength: 7
    });

    self.selectedAlbum = ko.observable(self.albums()[0]);

    self.selectedAlbum.subscribe(function() {
        $('.modalInner').empty();
        $('.modalTitle').empty();
        self.showModal();
    });

    self.showModal = function(data, event) {
        /*create modal*/
        $(".modal").show();
        self.modal = $(".modalInner");
        self.modal.empty();
        $(".modalTitle").empty();
        self.imgIndex = 1;
        self.imgUrl = "../static/images/" + self.selectedAlbum().albumID + "/" + self.imgIndex + ".jpg";
        /*add main gallery image and title to the modal*/
        $(".modalTitle").append('<h3>' + self.selectedAlbum().albumTitle + '</h3>');
        self.modal.append('<div class="galleryImgMain"></div><div class="thumbnails"></div>');
        $(".galleryImgMain").attr("style", "background-image: url(" + self.imgUrl + ")");
        /*loop through all items in the album and add them as thumbnails*/
        while (self.imgIndex <= self.selectedAlbum().albumLength) {
            self.imgUrl = "../static/images/" + self.selectedAlbum().albumID + "/" + self.imgIndex + ".jpg";
            $('.thumbnails').append('<div class="galleryImgSmall" id="' + self.imgIndex + '" style="background-image: url(' + self.imgUrl + ');"></div>');
            self.imgIndex++;
        }
        self.imgIndex = 1;
        /*click handlers for dynamically injected content*/
        $(".galleryImgSmall").on("click", function() {

            self.imgIndex = this.id;
            self.imgUrl = "/static/images/" + self.selectedAlbum().albumID + "/" + self.imgIndex + ".jpg";

            if ($(window).width() < 768) {
                var domain = "http://localhost:4000"; // TESTING ONLY
                //TODO: before publishing, uncomment this line:
                domain = "http://fresnocountypeaceofficersmemorial.org";
                var url = domain + self.imgUrl;
                window.open(url, '_blank');
            } else {
                $(".galleryImgMain").attr("style", "background-image: url(" + self.imgUrl + ")");
                $(".imgActive").removeClass("imgActive");
                $("#" + self.imgIndex).addClass("imgActive");
            }
        });

        $(".galleryImgMain").on("click", function() {
            self.imgUrl = "/static/images/" + self.selectedAlbum().albumID + "/" + self.imgIndex + ".jpg"
            var domain = "http://localhost:4000"; // TESTING ONLY
            //TODO: before publishing, uncomment this line:
            domain = "http://fresnocountypeaceofficersmemorial.org";
            var url = domain + self.imgUrl;
            window.open(url, '_blank');
        });
        $(".galleryRight").on("click", function(e) {
            e.stopImmediatePropagation();
            if (self.imgIndex <= self.selectedAlbum().albumLength) {
                self.imgIndex++;
                self.imgUrl = "../static/images/" + self.selectedAlbum().albumID + "/" + self.imgIndex + ".jpg";
                $(".galleryImgMain").attr("style", "background-image: url(" + self.imgUrl + ")");
                $(".imgActive").removeClass("imgActive");
                $("#" + self.imgIndex).addClass("imgActive");
                return;
            }


        });
        $(".galleryLeft").on("click", function(e) {
            e.stopImmediatePropagation();
            if (self.imgIndex > 1) {
                self.imgIndex--;
                self.imgUrl = "../static/images/" + self.selectedAlbum().albumID + "/" + self.imgIndex + ".jpg";
                $(".galleryImgMain").attr("style", "background-image: url(" + self.imgUrl + ")");
                $(".imgActive").removeClass("imgActive");
                $("#" + self.imgIndex).addClass("imgActive");
            }

        });
    }
}

$('.modalClose').on("click", function() {
    $('.modalInner').empty();
    $('.modalTitle').empty();
    $('.modal').hide();
});
