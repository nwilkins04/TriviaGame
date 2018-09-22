console.log("trivia game")

//functions for timmers
    //set time to _ min
    //timmer counts down
    //timmer stops at 00:00
//show timmer at start, when start pressed questions show
//when timmer ends questions disappear
//end of game questions disappear, results show up

//run code when page ends
window.onload = function(){
    $("#start").on("click", stopwatch.start);
    $("#stop").on("click", stopwatch.stop);
};

//global variables
var intervalId;
var clockRunning = false;

//stopwatch
var stopwatch = {
    time: 60,

    // reset: function() {
    //     stopwatch.time = 60;
    //     //change text display
    //     $("#display").text("00:00");
    // },

    //set the clock to running aka start
    start: function() {
        if(!clockRunning) {
            intervalId = setInterval(stopwatch.count, 1000);
            clockRunning = true;
        }
    },

    //set the clock to not be running aka stop
    stop: function() {
        clearInterval(intervalId);
        clockRunning = false;
    },

    //counting display and stops timmr when 0
    count: function() {
        stopwatch.time--;
        console.log(stopwatch.time);
        if(stopwatch.time === 0) {
            stopwatch.stop();
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
