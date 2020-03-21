$(document).ready(function() {
//var time = moment().format('MMMM Do YYYY, h:mm:ss a');

//$("#currentDay").append(time);
//moment().format('MMMM Do YYYY, h:mm:ss a');

function update() {
    $("#currentDay").html(moment().format('MMMM Do, YYYY'));
}

setInterval(update, 1000);

})