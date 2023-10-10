$(document).ready(function () {

    // every 2400 ms -> a new star is falling down
    setInterval(function () {
        makeAStarFall();
    }, 2400);
});

function makeAStarFall() {
    // left: random start- und stop-position position
    var min = -200;
    var max = 1800;

    var startPosLeft = Math.floor((Math.random() * max) + min);
    var stopPosLeft = Math.floor((Math.random() * max) + min);

    $('<div>').addClass("star falling-star").insertAfter('.stars');

    $('.falling-star').css("left", startPosLeft);

    setTimeout(function () {
        $(".falling-star").addClass("go-falling");
        $('.go-falling').css("left", stopPosLeft);
    }, 400);

    setTimeout(function () {
        $(".falling-star").remove();
    }, 1800);
}