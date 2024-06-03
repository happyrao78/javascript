function updateTime() {
    let a = new Date();
    let h = a.getHours();
    let m = a.getMinutes();
    let s = a.getSeconds();
    let ms = a.getMilliseconds();
    
    // // Formatting single digits with leading zeros
    // h = (h < 10 ? "0" : "") + h;
    // m = (m < 10 ? "0" : "") + m;
    // s = (s < 10 ? "0" : "") + s;

    let currentTime = h + ":" + m + ":" + s + ":" + ms;

    // Assuming you have an HTML element with the class name "first"
    let clock = document.getElementsByClassName("second")[0];
    if (clock) {
        clock.innerHTML = currentTime;
    }
}

// Call updateTime function every second (1000 milliseconds)
setInterval(updateTime, 1000);
