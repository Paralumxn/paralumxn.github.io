


$(window).on('load', function() {
    function randomWholeNum(min, max, total) {
        var arr = []
        while(arr.length < total){
          var randomnumber = Math.floor(Math.random() * (max - min + 1)) + min;
            if(arr.indexOf(randomnumber) > -1) continue;
            arr[arr.length] = randomnumber;
        }
        return arr;
      }

      setInterval(function () {
        var rand_no1 = randomWholeNum(1, 9, 1);
        var rand_no2 = randomWholeNum(1, 9, 1);
        var rand_no3 = randomWholeNum(1, 9, 1);
        var rand_no4 = randomWholeNum(1, 9, 1);
        var rand_no5 = randomWholeNum(1, 9, 1);
        var rand_no6 = randomWholeNum(1, 9, 1);
        var rand_no7 = randomWholeNum(1, 9, 1);
        var rand_no8 = randomWholeNum(1, 9, 1);
        var rand_no9 = randomWholeNum(1, 9, 1);
        var rand_no10 = randomWholeNum(1, 9, 1);
        document.getElementById("1").innerText = rand_no1;
        document.getElementById("2").innerText = rand_no2;
        document.getElementById("3").innerText = rand_no3;
        document.getElementById("4").innerText = rand_no4;
        document.getElementById("5").innerText = rand_no5;
        document.getElementById("6").innerText = rand_no6;
        document.getElementById("7").innerText = rand_no7;
        document.getElementById("8").innerText = rand_no8;
        document.getElementById("9").innerText = rand_no9;
        document.getElementById("10").innerText = rand_no10;
      }, 10)
})