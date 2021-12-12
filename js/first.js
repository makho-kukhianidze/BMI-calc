function healthyWeight(height,weight){
    var height = document.getElementById("height").value;
    var weight = document.getElementById("weight").value;
    var cemToMetr = height / 100;
    var calc = Math.round(weight / (cemToMetr * cemToMetr));
    if(calc <=18.5){
        document.getElementById('calc').innerHTML = 
        "category: 1 " + "<br>" + "You are Underweight. " + "Your Body Mass Index is: " + calc;
        document.getElementById('mainBox').style.backgroundColor = "rgba(77, 155, 221, 80%)";
    }else if(calc > 18.5 &&  calc  < 25){
        document.getElementById('calc').innerHTML = 
        "category: 2 " + "<br>" + "You are Normal weight. " + "Your Body Mass Index is: " + calc;
        document.getElementById('mainBox').style.backgroundColor = "rgba(98, 181, 101, 82%)";
    }else if(calc >= 25 &&  calc  <= 29.9){
        document.getElementById('calc').innerHTML = 
        "category: 3 " + "<br>" + "You are Overweight. " + "Your Body Mass Index is: " +  calc;
        document.getElementById('mainBox').style.backgroundColor = "rgba(211, 159, 99, 82%)";
    }else if(calc >  29.9){
        document.getElementById('calc').innerHTML = 
        "category: 4 " + "<br>" + "You are Obesity weight. " + "Your Body Mass Index is: " +  calc;
        document.getElementById('mainBox').style.backgroundColor = "rgba(228, 89, 105, 74%)";
    }else{
        document.getElementById('calc').innerHTML = 
        "Are you Okay? You must write your height and weight!";
    } 
}

function heightWeight(){
    document.getElementById('height').value = '';
    document.getElementById('weight').value = '';
}