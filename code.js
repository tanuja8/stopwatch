var hr=0, min=0,sec=0,count=0;
var timer= true;

function start(){
    timer=true;
    stopwatch();
}
function stop(){
    timer=false;
}
function reset(){
    timer = false;
    hr=0;
    min=0;
    sec=0;
    count=0;
    document.getElementById("hr").innerHTML = "00"
    document.getElementById("sec").innerHTML = "00"
    document.getElementById("min").innerHTML = "00"
    document.getElementById("milisec").innerHTML = "00"
}
function stopwatch(){
    if(timer==true){
        count=count+1;
        if(count<10){
            document.getElementById('milisec').innerHTML="0" + count;
        }else{
            document.getElementById('milisec').innerHTML=count;
        }
        if(count==100){
            sec=sec+1;
            if(sec<10){
                document.getElementById('sec').innerHTML="0" + sec;
            }else{
                document.getElementById('sec').innerHTML=sec;
            }
            count=0;
        if(sec==60){
            min=min+1;
            if(min<10){
                document.getElementById('min').innerHTML="0" + min;   
            }else{
                document.getElementById('min').innerHTML=min;
            }
            sec=0;
        if(min==60){
            hr=hr+1;
            if(hr<10){
            document.getElementById('hr').innerHTML="0" + hr;
        }else{
            document.getElementById('hr').innerHTML= hr;
        }
        min=0;
        sec=0;
    }
        }
}
setTimeout("stopwatch()",10);
}
}




