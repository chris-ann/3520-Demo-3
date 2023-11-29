var dog = $("#Doggo")
var cat = $("#Cat")
var plant = $("#Plant")
var meow = document.getElementById("meow")
var bark = document.getElementById("bark")

var dogColors = ["#020887", "#647AA3", "#C6EBBE", "#9AD4D6", "#F9DC5C"]
var catColors = ["#00A676", "#276FBF", "#E84855", "#7E52A0", "#FCAB10"]
var counter = 0;

var quotes = ["Home sweet home", "love laugh live", "home is where the heart is", "don't talk to me before i've had my coffee", "meow", "5 more minutes"]

dog.hide();
cat.hide();

$("#Chair-seat").on("click", function () {
    dog.fadeToggle()
})
$("#Chair").on("click", function () {
    cat.fadeToggle()
})

dog.on("click", function () {
    // bark.play()
    $("#Doggo .cls-8").css("fill", dogColors[counter])
    counter++;
    if (counter == dogColors.length) {
        counter = 0;
    }
})
cat.on("click", function () {
    // meow.play()
    var num = Math.floor(Math.random() * 6)
    console.log(num)
    $("#Cat .cls-8").css("fill", catColors[num])
})

$(document).on("keypress", function (e) {
    // console.log(e)
    if (e.key == " ") {
        console.log("tip plant over")
        plant.css("transform", "rotate(90deg)")
    } else if (e.key == 'q') {
        var num = Math.floor(Math.random() * quotes.length + 1)
        $("#quotes").text(quotes[num])
    }
})