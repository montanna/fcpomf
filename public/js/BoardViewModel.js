BoardViewModel = function() {
    var self = this;
    self.board = firebase.database().ref('boardList/board');
    self.directors = firebase.database().ref('boardList/directors');

    self.boardMembers = ko.observableArray([]);
    self.boardDirectors = ko.observableArray([]);

    self.board.on('value', function(snapshot) {
        self.boardMembers([]);
        snapshot.forEach(function(childSnapshot) {
            var childKey = childSnapshot.key;
            var childData = childSnapshot.val();
            self.boardMembers.push({ data: childData, key: childKey });
        });
    });

    self.directors.on('value', function(snapshot) {
        self.boardDirectors([]);
        snapshot.forEach(function(childSnapshot) {
            var childKey = childSnapshot.key;
            var childData = childSnapshot.val();
            self.boardDirectors.push({ data: childData, key: childKey });
        });
    });

}
