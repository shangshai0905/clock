function currentTime() {
    let date = new Date(); 
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let time = "AM";
        if(hh == 0)
        {
            hh = 12;
        }
        if(hh > 12)
        {
            hh = hh - 12;
            time = "PM";
        }
        if (hh < 10) 
        {
            hh = (`0${hh}`)
        }
        if (mm < 10) 
        {
            mm = (`0${mm}`)
        }
        if (ss < 10) 
        {
            ss = (`0${ss}`)
        }
      
    let timenow = (`${hh}:${mm}:${ss} ${time}`);

    document.getElementById("digitalClock").innerText = timenow; 
    
    setTimeout(function(){ currentTime() });
}
currentTime();


const deg = 6;
const hr = document.querySelector('#hr');
const mn = document.querySelector('#mn');
const sc = document.querySelector('#sc');

setInterval(() => {

let day = new Date();
let hh = day.getHours() * 30;
let mm = day.getMinutes() * deg;
let ss = day.getSeconds() * deg;

hr.style.transform = `rotateZ(${(hh)+(mm/12)}deg)`;
mn.style.transform = `rotateZ(${mm}deg)`;
sc.style.transform = `rotateZ(${ss}deg)`;

})
