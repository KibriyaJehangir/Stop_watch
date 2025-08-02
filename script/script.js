//DOM manupulation
let minutes = document.getElementById("minutes");
let hours = document.getElementById("hours");
let seconds = document.getElementById("seconds");
let button = document.getElementById("main_button");
let time_display = document.getElementById("time_display");

//Important variables
let seconds_count = 0;
let hour_count = 0;
let minutes_count = 0;
let button_clicks=0;

//when button clicks
function button_click(){
seconds.innerHTML=`00`

//counting clicks of button
button_clicks+=1;

//checking if number of button clicks are odd it means restart is pressed
if (button_clicks%2!=0){
     seconds_count = 0;
        hour_count = 0;
        minutes_count =0;

}
// default settings when button is clicked
button.style.color="white";
button.innerHTML="stop";
time_display.style.color="white";

//starting interval
if (button_clicks==1){
setInterval(count,1000);
}

function count(){
    // checking if stop button is pressed
    if(button_clicks%2==0){
      button.style.color="black";
      button.innerHTML="restart";
      time_display.style.color="black";
    }

    //incrementing seconds
    else{
    seconds_count+=1;
    }

    //handling minutes
    if (seconds_count> 59){
        minutes_count+=1;
        seconds_count=0;
    }
    
    //handling hours
    if(minutes_count>59){
        hour_count+=1;
        minutes_count=0;
    }

    //handling default zeros before seconds that are less than 10
     if (seconds_count<10){
        seconds.innerHTML=`0${seconds_count}`;   
    }
    else{seconds.innerHTML=`${seconds_count}`;
    }

    //handling default zeros before minutes that are less than 10
    if (minutes_count<10){
        minutes.innerHTML=`0${minutes_count}`;  
    }
    else{
    minutes.innerHTML=`${minutes_count}`;
    }
    
}}
