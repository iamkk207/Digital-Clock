
function currentTime2(){
    let time = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', second: '2-digit', hour12: true});
    document.getElementById("digitalclock").innerHTML=time;
}

function currentTime() {
    currentTime2();
    setInterval(currentTime2 , 1000);
}

currentTime();
