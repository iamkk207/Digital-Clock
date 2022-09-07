
function currentTime2(){
    let time = new Date().toLocaleTimeString();
    document.getElementById("digitalclock").innerHTML=time;
}

function currentTime() {
    currentTime2();
    setInterval(currentTime2 , 1000);
}

currentTime();