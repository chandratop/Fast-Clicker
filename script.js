window.onload = function () {
    var clockvar1;
    var clockvar2;
    var current = 15;
    var count = 0;

    var clock = document.getElementById("clock");
    var clickbox = document.getElementById("clickbox");
    var cpsbox = document.getElementById("cps-box");
    var clickdiv = document.getElementById("clicks");

    clickbox.addEventListener("click", start);
    clickbox.addEventListener("click", updateCount)
    clickbox.addEventListener("click", updateClickBox);
    
    function startClock() {
        clock.innerHTML = "15s";
        clickbox.removeEventListener("click", start);
        clockvar1 = setInterval(updateClock, 1000);
        setTimeout(startCPS, 1000);
    };
    
    function updateClock() {
        --current;
        clock.innerHTML = current.toString() + "s";
        if (current == 0) {
            clearInterval(clockvar1);
            clearInterval(clockvar2);
            clickbox.removeEventListener("click", updateClock);
            clickbox.removeEventListener("click",updateClickBox);
            clickbox.removeEventListener("click",updateCount);
            // var resetButton = document.getElementById("reset");
            // resetButton.classList.toggle("hidden");
        }
    };
    
    function startCPS() {
        clockvar2 = setInterval(updateClickBox, 1000);
    }

    function updateClickBox() {
        if (current == 15) {
            cpsbox.innerHTML = "...";
        }
        else {
            var cps = count / (16 - current);
            cps = cps.toPrecision(3);
            cpsbox.innerHTML = cps.toString() + "<br>" + "CPS";
        }
    }

    function updateCount() {
        ++count;
        clickdiv.innerHTML = count.toString() + "<br>" + "clicks";
    }

    function start() {
        startClock();
    };
};