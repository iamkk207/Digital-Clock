
function currentTime2(){
    //let time = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', second: '2-digit', hour12: true});
    
    let time = new Date();

    let hour = time.getHours();
    let minute = time.getMinutes();
    let second = time.getSeconds();

    let session ="AM" ;

    if(hour === 0){
        hour = 12;
    }

    if(hour>12){
        hour -= 12;
        session ="PM";
    }

    hour = (hour < 10) ? "0" + hour : hour;
    minute = (minute < 10) ? "0" + minute : minute;
    second = (second < 10) ? "0" + second : second;

    
   let currTime =  hour + " : " + minute + " : " + second + "  " + session ;
    document.getElementById("digitalclock").innerHTML = currTime;
}   

    
function currentTime() {
    currentTime2();
    setInterval(currentTime2 , 1000);
}

currentTime();