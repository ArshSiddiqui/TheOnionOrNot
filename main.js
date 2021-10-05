/* Randomize array in-place using Durstenfeld shuffle algorithm */
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

var data;
var current_index = 0;
var isOnion;

function load_question() {
    let question = data[current_index];
    $("#artitle").text(question["Title"]);
    isOnion = parseInt(question["Onion"]);
    current_index = (current_index + 1) % data.length;
}

$(document).ready(function() {
    // Disable buttons first
    // We enable the buttons once the titles are ready.
    $("#btnreal").prop("disabled", true);
    $("#btnonion").prop("disabled", true);

    $.ajax({
        url: "articles.json",
        dataType: "json",
    }).done(function(resp, status) {
        data = resp;
        shuffleArray(data);
        load_question();

        // Enable the buttons
        $("#btnreal").prop("disabled", false);
        $("#btnonion").prop("disabled", false);
    });

    // Setup the buttons
    $("#btnreal").click(function() {
        if (isOnion) {
            swal("Wrong!");
        } else {
            swal("Correct!");
        }
        load_question();
    });
    $("#btnonion").click(function() {
        if (isOnion) {
            swal("Correct!");
        } else {
            swal("Wrong!");
        }
        load_question();
    });
});