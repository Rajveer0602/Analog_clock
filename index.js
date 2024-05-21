// In one rotation there is 360 deg
// In 12 hour there is a 360deg => 1 hour = 30 deg
// In 60 minute there is a 360deg => 1 minute = 6 deg
// In 60 second there is a 360deg => 1 second = 6 deg


function clock(){
    let hour = document.querySelector(".hour");
    let minutes = document.querySelector(".minutes");
    let second = document.querySelector(".second");
    let date = new Date();
    // console.log(date);

    let hr = date.getHours();
    let mint = date.getMinutes();
    let sec = date.getSeconds();
    hour.style.transform = `rotateZ(${hr*30 + mint/12}deg)`;
    minutes.style.transform = `rotateZ(${mint*6}deg)`;
    second.style.transform = `rotateZ(${sec*6}deg)`;

}

clock();
setInterval(clock , 1000);