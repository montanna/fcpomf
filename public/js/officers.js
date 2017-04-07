    OfficersViewModel = function() {
        var self = this;
        self.officers = ko.observableArray([]);
        self.ref = firebase.database().ref("officersList");
        self.ref.once('value', function(snapshot) {
            snapshot.forEach(function(childSnapshot) {
                var childKey = childSnapshot.key;
                var childData = childSnapshot.val();
                self.officers.push({ data: childData, key: childKey });
            });
        });

        self.selectOfficer = function(data) {
            self.selectedOfficer(data);
        };

        self.openPopUp = function() {
            $(".modal2").empty();
            $(".modal2").append(
                '<h1>' + self.selectedOfficer().officerName + '</h1><div class="modalInner2 flexParent"><div class="modalClose2"><span>x</span></div><div class="col-sm-3 centerText"><img src="' + self.selectedOfficer().officerImg + '"/></div><div class="col-sm-9">' + self.selectedOfficer().description + '</div></div>'
            );
            $(".modal2").show();
            /*click handlers*/
            $(".modalClose2").on("click", function() {
                $(".modal2").hide();
            });
        };


        self.selectedOfficer = ko.observable(self.officers()[0]);
    }
