/* Image Function */
window.onload = function () {
    var html = document.getElementsByTagName('html');
    for (var i = 0; html = html[i++];) {
    html.ondragstart = function () {
        return false;
      };
    }
};

/* Disabled Function */

/* Right click disabled */
$("html").on("contextmenu", function(e) {
    return false;
});

/* Copy paste disabled */
$('html').bind('cut copy', function (event) {
    event.preventDefault();
});

/* Keyboard prefixes disabled */

document.onkeydown = function (e) {

    // disable F12 key
    if (e.keyCode == 123) {
        return false;
    }

    // disable I key
    if (e.ctrlKey && e.shiftKey && e.keyCode == 73) {
        return false;
    }

    // disable J key
    if (e.ctrlKey && e.shiftKey && e.keyCode == 74) {
        return false;
    }

    // disable U key
    if (e.ctrlKey && e.keyCode == 85) {
        return false;
    }
}

$(window).on('load', function startTime() {
    //  function startTime() {
    const today = new Date();
    let d = today.getDate();
    let s = today.getSeconds();
    s = checkTime(s);

    const date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutes + ':' + s + ' ' + ampm;
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();

    if (dd < 10) {
        dd = '0' + dd
    }
    if (mm == 1) {
        mm = "JAN"
    } if (mm == 2) {
        mm = "FEB"
    } if (mm == 3) {
        mm = "MAR"
    } if (mm == 4) {
        mm = "APR"
    } if (mm == 5) {
        mm = "MAY"
    } if (mm == 6) {
        mm = "JUN"
    } if (mm == 7) {
        mm = "JUL"
    } if (mm == 8) {
        mm = "AUG"
    } if (mm == 9) {
        mm = "SEP"
    } if (mm == 10) {
        mm = "OCT"
    } if (mm == 11) {
        mm = "NOV"
    } if (mm == 12) {
        mm = "DEC"
    }
    document.getElementById('clock').innerHTML = mm + ' ' + dd + ', ' + yyyy + ' ' + strTime;
    setTimeout(startTime, 1000);
    // }
});

function checkTime(i) {
    if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
    return i;
}