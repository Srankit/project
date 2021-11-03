let seconds = 0;
let minutes = 0;
let hours = 0;
let display_seconds=0;
let display_minutes=0;
let display_hours=0;

function stopWatch(){
seconds++;
if(seconds/60===1){
    seconds = 0;
    minutes++;
    if(minutes/60===1){
      minutes=0;
      hours++;  
    }
   }
if(seconds<10)
{
    display_seconds="0"+seconds.toString();
}
else{
    display_seconds= seconds; 
}
if(seconds<0){
    display_minutes = "0"+seconds.toString();
}else{
display_minutes= minutes;
}

if(hours<10){
display_hours= "0"+hours.toString();
}
else{
    display_hours= hours;
}
   document.getElementById('display').innerHTML=hours = ":" + minutes +":" + seconds;
}


stopWatch();