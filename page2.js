const token = localStorage.getItem("token");
const user = localStorage.getItem("user");
const birth = localStorage.getItem("birth");
const split = document.getElementById("split");
var ey1 = document.getElementById("dot4").style;
var ey2 = document.getElementById("dot5").style;
var eyc1 = document.getElementById("dot6").style;
var eyc2 = document.getElementById("dot7").style;

document.getElementById("Token ID").innerHTML = token;
document.getElementById("Nama").innerHTML = user;
document.getElementById("Tanggal Lahir").innerHTML = birth;

function kembali() {
  location.href = "index.html";
}

onload = function () {
  setTimeout(function () {
    split.style.opacity = "1";
    split.style.transition = "opacity 1s";
  }, 500);
};

var tid1 = setTimeout(mycode, 1000);
function mycode() {
  var r = Math.floor(Math.random() * 10);
  if (r == 0 || r == 1 || r == 2 || r == 3) {
    ey1.left = "70px";
    ey2.left = "120px";
  } else if (r == 4 || r == 5 || r == 6) {
    ey1.left = "65px";
    ey2.left = "115px";
  } else {
    ey1.left = "75px";
    ey2.left = "125px";
  }
  tid1 = setTimeout(mycode, 1000); // repeat
}

var tid2 = setTimeout(mycode2, 500);
function mycode2() {
  setTimeout(function () {
    var r = Math.floor(Math.random() * 10);
    if (r == 0 || r == 9) {
      eyc1.top = "64px";
      eyc2.top = "64px";
    } else {
      eyc1.top = "35px";
      eyc2.top = "35px";
    }
  }, 750);
  tid2 = setTimeout(mycode2, 500); // repeat
}
