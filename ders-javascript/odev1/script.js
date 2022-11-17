let myName = document.getElementById("myName");
myName.innerHTML = prompt("Adınızı giriniz..");

time();
function time (){
    const days = ["pazar", "pazartesi", "salı", "çarşamba", "perşembe", "cuma", "cumartesi"];

    let date = new Date();
    let day = days[date.getDay()];
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    hours = (hours < 10) ? "0" + hours : hours
    minutes = (minutes < 10) ? "0" + minutes : minutes
    seconds = (seconds < 10) ? "0" + seconds : seconds

    document.getElementById("myClock").innerHTML = `${hours}: ${minutes}: ${seconds} ${day}`;
}

setInterval(time,1000);