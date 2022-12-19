var bangla = document.getElementById("bangla");
var english = document.getElementById("english");
var physics = document.getElementById("physics");
var math = document.getElementById("math");
var result = document.getElementById("result");
var average = document.getElementById("average");
var grade = document.getElementById("grade");
var passorfail = document.getElementById("passorfail");
var inputs = document.querySelectorAll(".inputs");

result.addEventListener("click", function () {
  if (
    bangla.value == "" ||
    bangla.value == "" ||
    physics.value == "" ||
    math.value == ""
  ) {
    alert("Vai sob input den");
  } else {
    var newbangla = parseInt(bangla.value);
    var newenglish = parseInt(english.value);
    var newphysics = parseInt(physics.value);
    var newmath = parseInt(math.value);
    var total = document.getElementById("total_num");
    var total_mark = newbangla + newenglish + newphysics + newmath;
    total.innerHTML = total_mark;
    var avrg = total_mark / 4;
    average.innerHTML = "Your Average mark is =" + avrg;
    if (avrg >= 80 && avrg == 100) {
      grade.innerHTML = "Your grade is = A+";
    } else if (avrg >= 70 && avrg < 80) {
      grade.innerHTML = "Your grade is = A";
    } else if (avrg >= 60 && avrg < 70) {
      grade.innerHTML = "Your grade is = A-";
    } else if (avrg >= 50 && avrg < 60) {
      grade.innerHTML = "Your grade is = B";
    } else if (avrg >= 40 && avrg < 50) {
      grade.innerHTML = "Your grade is = C";
    } else {
      grade.innerHTML = "Your grade is = F";
    }
    if (
      bangla.value >= 40 &&
      bangla.value >= 40 &&
      physics.value >= 40 &&
      math.value >= 40
    ) {
      passorfail.innerHTML = "Pass/Fail = Pass";
    } else {
      passorfail.innerHTML = "Pass/Fail = Fail";
      grade.innerHTML = "Your grade is = F";
      alert("You fail in one subject");
    }
  }
});
result.addEventListener("click", function () {
  if (
    bangla.value > 100 ||
    bangla.value > 100 ||
    physics.value > 100 ||
    math.value > 100
  ) {
    alert("You entered a value whice is gratter than 100");
  }
});
