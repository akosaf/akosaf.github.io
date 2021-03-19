document.getElementById("btn").onclick = () => {
    event.preventDefault();
    bmi();
};

function bmi() {
    let weight = document.getElementById("wh").value;
    let height = document.getElementById("he").value;
    let result = weight / Math.pow(height/100, 2);
    document.getElementById("res").innerHTML = `Your BMI is: ${result}`;
    document.getElementById("res").style.opacity = "100%";
    
    evaluation(result);
}

function evaluation(bmi) {
    if (bmi<18.5) {
        document.getElementById("res").innerHTML += `<br><br>You're lean. Go and eat something!`;
    } else if (bmi<25) {
        document.getElementById("res").innerHTML += `<br><br>You're normal. Keep up the good work!`;
    } else if (bmi<30) {
        document.getElementById("res").innerHTML += `<br><br>You're overweighted. Go to the gym!`;
    } else {
        document.getElementById("res").innerHTML += `<br><br>You're obese. Stop drinking that much beer!`;
    }
}
