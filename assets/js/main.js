const firebaseConfig = {
    apiKey: "AIzaSyAmhO1nj8GyvnCs5M38DwKks8u59Vfa8YE",
    authDomain: "tetris-7134e.firebaseapp.com",
    databaseURL: "https://tetris-7134e-default-rtdb.firebaseio.com",
    projectId: "tetris-7134e",
    storageBucket: "tetris-7134e.appspot.com",
    messagingSenderId: "551169985403",
    appId: "1:551169985403:web:44a41d123eb129bcb14bde",
    measurementId: "G-4BDLEQYLVH"
};
firebase.initializeApp(firebaseConfig);
firebase.database().ref('Download').on('value', function (snapshot) {
    $("#windows-cnt").text(snapshot.val().windows);
    $("#mac-cnt").text(snapshot.val().mac);
    $("#python-cnt").text(snapshot.val().python);
});

function download(id) {
    let cnt = parseInt($(id).text());
    $(id).text(cnt+1);
    if (id==="#windows-cnt") {
        firebase.database().ref('Download').update({
            windows : cnt+1
        });
    }
    else if (id==="#mac-cnt") {
        firebase.database().ref('Download').update({
            mac : cnt+1
        });
    }
    else {
        firebase.database().ref('Download').update({
            python : cnt+1
        });
    }

}