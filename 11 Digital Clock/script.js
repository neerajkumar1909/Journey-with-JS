let hours = document.getElementById("hours")
let mins = document.getElementById("mins")
let sec = document.getElementById("sec")



// console.log(currentTime)
// console.log(currentTime.getHours())
// console.log(currentTime.getMinutes())
// console.log(currentTime.getSeconds())

setInterval(() => {
    let currentTime = new Date();
    hours.innerHTML = (currentTime.getHours() < 10 ? "0" : '') + currentTime.getHours();
    mins.innerHTML = (currentTime.getMinutes() < 10 ? "0" : '') + currentTime.getMinutes();
    sec.innerHTML = (currentTime.getSeconds() < 10 ? "0" : '') + currentTime.getSeconds();
}, 1000)
