function signin(){
    document.getElementById("sec1btn").innerHTML = "Tank you for sign in ";
    document.getElementById("sec1btn").style.background = "green";
}

function rent(){
    document.getElementById('sec2btn1').style.display = 'none';
    document.getElementById('sec2btn2').style.display = 'block';
    document.getElementById('sec2btn3').style.display = 'block';
}
function freeRent(){
    document.getElementById("sec2btn2").innerHTML = "Sorry No longer avilable ";
    document.getElementById("sec2btn2").style.background = "red";
}

function pay(){
    document.getElementById("sec2btn3").innerHTML = "Thank you Enjoy your show ";
    document.getElementById("sec2btn3").style.background = "yellow";
    document.getElementById('sec2btn2').style.display = 'none';
}