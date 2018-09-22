console.log("trivia game loaded")

//show timmer at start, when start pressed questions show
//when timmer ends questions disappear
//end of game questions disappear, results show up

//run code when page ends
window.onload = function(){
    $("#start").on("click", stopwatch.start);
    $("#stop").on("click", stopwatch.stop);
    //hide score
    $("#totalScore").hide();
};

//global variables
var intervalId;
var clockRunning = false;

//stopwatch
var stopwatch = {
    time: 60,

    //set the clock to running aka start
    start: function() {
        if(!clockRunning) {
            intervalId = setInterval(stopwatch.count, 1000);
            clockRunning = true;
            $("#quiz").show();
        }
    },

    //set the clock to not be running aka stop
    stop: function() {
        clearInterval(intervalId);
        clockRunning = false;
        $("#quiz").hide();
        $("#totalScore").show();
    },

    //counting display and stops timmr when 0
    count: function() {
        stopwatch.time--;
        if(stopwatch.time === 0) {
            stopwatch.stop();
            $("#quiz").hide();
            $("#totalScore").show();
        }
        var converted = stopwatch.timeConverter(stopwatch.time);
        $("#display").text(converted);
    },

    //convert time to minutes and seconds
    timeConverter: function(t) {
        var minutes = Math.floor(t/60);
        var seconds = t - (minutes*60);
        if (seconds<10) {
            seconds = "0" + seconds;
        }
        if (minutes === 0) {
            minutes = "00";
        }
        else if(minutes<10) {
            minutes = "0" + minutes;
        }
        return minutes + ":" + seconds;
    }
};


// //counting correct answer vs wrong answer
var win = 0
var wrong = 0
var noAnswer = 0
// var unanswered = 0


// scoring correct vs wrong

// $(".answer").on("click", function() {
//     win++
//     $(".correct").text("Correct Answers: " + win)
// })

// $(".option").on("click", function() {
//     wrong++
//     $(".wrong").text("Wrong: " + wrong)
// })

$("#stop").on("click", function() {
    $("input").each(function(){
        if(this.checked === true) {
            if($(this).hasClass("answer")){
                win++;
            } else{
                wrong++;
            }
        }
    })
    noAnswer = 8-win-wrong;

    $(".correct").text("Correct answers: " + win);
    $(".wrong").text("Wrong answers: " + wrong);
    $(".unanswered").text("What happened: " + noAnswer);
})


//hide questions
$("#quiz").hide();
