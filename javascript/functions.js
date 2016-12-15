// javascript functionality for Cub Scout website


// function to validate leader login
function check(form) {
    if (form.username.value == "leader" && form.password.value == "1234") {
        window.location.assign('leadersMenu.html');
    } else {
        alert("The username or password are incorrect. Please try again");
    }
}


// Badge Page - function to hide and show badge information box when image is clicked on


// Helper Registration page - function to show message when form is submitted

function helper(form) {
    var yourname = form.name.value;

    document.getElementById("helperbutton").style.display = "none";
    document.getElementById("helper").innerHTML = "Thanks " + yourname + " your details have been collected. We'll be in touch!" + "<br> <a href='parents.html'>Click here to return to the options page</a><br>";

}

// Event info page in leaders area - function to show message when form is submitted

function eventAdd(form) {
    var eventName = form.eventname.value;
    var eventDate = form.eventdate.value;
    var eventInfoAdd = form.eventinfo.value;

    document.getElementById("eventInfo").innerHTML = "Event info added: " + "<br>" + eventName + "<br>" + eventDate + "<br>" + eventInfoAdd + "<br>";
}