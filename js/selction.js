function clearSelection() {
    Cookies.remove('selection');
    window.open("../index.html", "_self");
}

var userSelection = Cookies.get('selection');

if (userSelection == 'mario') {
    document.getElementById("selection-container").innerHTML = "<p> Mario </p>";
} else if(userSelection == 'luigi') {
    document.getElementById("selection-container").innerHTML = "<p> Luigi </p>";
} else if(userSelection == 'wario') {
    document.getElementById("selection-container").innerHTML = "<p> Wario </p>";
} else {
    document.getElementById("selection-container").innerHTML = "<p> Invalid Choice! </p>";

}

