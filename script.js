var hr = 0;
var min = 0;
var sec = 0;
var count = 0;

var timer = false;

// star button

function start() {
    timer = true;

    stopwatch();
    document.getElementById("count").style.color = "yellow";
}

// stop button

function stop() {
    timer = false;

}

// reset button

function reset() {
    timer = false;

    hr = 0;
    min = 0;
    sec = 0;
    count = 0;

    // on reset formating 00:00:00:00
    document.getElementById("hr").innerHTML = "00";
    document.getElementById("min").innerHTML = "00";
    document.getElementById("sec").innerHTML = "00";
    document.getElementById("count").innerHTML = "00";

    // to refresh the page to maintain the timeout interval
    window.location.reload();

    //  reset color
    let clr = document.getElementById("container");
    clr.classList.add('reset_color');
}

// stopWatch fuction

function stopwatch() {

    if (timer == true)
        count = count + 1;
    if (count == 100) {
        sec = sec + 1;
        count = 0;
        document.getElementById("sec").style.color = "pink";
    }

    if (sec == 60) {
        min = min + 1;
        sec = 0;
        document.getElementById("min").style.color = "#6a3ce7";


    }

    if (min == 60) {
        hr = hr + 1;
        min = 0;
        sec = 0;
        document.getElementById("hr").style.color = "rgb(235, 67, 38)";
    }


    // code for formating 00:00:00:00

    var hrstring = hr;
    var minstring = min;
    var secstring = sec;
    var countstring = count;
    if (hr < 10) {
        hrstring = "0" + hrstring;
    }
    if (min < 10) {
        minstring = "0" + minstring;
    }
    if (sec < 10) {
        secstring = "0" + secstring;
    }
    if (count < 10) {
        countstring = "0" + countstring;
    }

    // to set the values of hr:min:sec:milisec

    document.getElementById("hr").innerHTML = hrstring;
    document.getElementById("min").innerHTML = minstring;
    document.getElementById("sec").innerHTML = secstring;
    document.getElementById("count").innerHTML = countstring;

    // timeout fuction

    setTimeout("stopwatch()", 10);
}