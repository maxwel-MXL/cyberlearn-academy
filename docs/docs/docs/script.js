function checkPassword() {
    let password = document.getElementById("password").value;
    let result = document.getElementById("result");

    if (password.length >= 12) {
        result.innerHTML = "Strong Password ✅";
        result.style.color = "lightgreen";
    } else {
        result.innerHTML = "Weak Password ❌";
        result.style.color = "red";
    }
}

function checkAnswer(answer) {
    let quiz = document.getElementById("quiz");

    if (answer === "Integrity") {
        quiz.innerHTML = "Correct ✅";
        quiz.style.color = "lightgreen";
    } else {
        quiz.innerHTML = "Wrong ❌";
        quiz.style.color = "red";
    }
}
