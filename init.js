// declaring element
const username = document.getElementById("username");
const logoutForm = document.getElementById("logoutForm");
const registerF = document.getElementById("registerF");
const startSection = document.getElementById("start");
const homeSection = document.getElementById("home");
const rewardSection = document.getElementById("reward");
const main = document.getElementById("main");
const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");
const box3 = document.getElementById("box3");
const rewardImage = document.getElementById("imgReward");
const nameImage = document.getElementById("imgName");
const full = document.getElementById("full");
const idtt = document.getElementById("idtt");
const idt = document.getElementById("idt");
const brtvalue = document.getElementById("birth");
const brtreplace = document.getElementById("birth");
const mmenu = document.getElementById("mmenu");
const dd = document.getElementById("dd");
const navwrapper = document.getElementById("navwrapper");
const hai = document.getElementById("infop");
const profile = document.getElementById("profile");
const topp = document.getElementById("topp");
const shuffle = document.getElementById("shuffle");
const foot = document.getElementById("foot");
const user = localStorage.getItem("user");
const link = localStorage.getItem("link");
const desc = localStorage.getItem("desc");
const token = localStorage.getItem("token");
const lif = localStorage.getItem("life");
const liff = parseInt(lif);
const score = localStorage.getItem("score");
const skr = parseInt(score);

document.getElementById("lifeuse").innerHTML = lif;
document.getElementById("skor").innerHTML = score;

const player = new Player();

let default_option = ["📕", "📗", "📘"];
box1.textContent = default_option[0];
box2.textContent = default_option[1];
box3.textContent = default_option[2];

function dice() {
  let gacha = [];
  for (let i = 0; i < default_option.length; i++) {
    const roll = default_option[~~(Math.random() * default_option.length)];
    gacha.push(roll);
  }
  return gacha;
}

function reward() {
  fetch("https://zoo-animal-api.herokuapp.com/animals/rand")
    .then((x) => x.json())
    .then((result) => {
      //set name reward
      let text = document.createElement("h1");
      text.textContent = result.name + ".img";
      var imn = text.textContent;
      localStorage.setItem("desc", imn);
      text.style.color = "rgb(68, 36, 82)";

      //set pic reward
      let img = new Image(300, 200);
      img.src = result.image_link;
      var imj = img.src;
      localStorage.setItem("link", imj);

      //set element
      rewardImage.appendChild(img);
      nameImage.appendChild(text);
      full.style.display = "block";
      full.style.transition = "display 0.5s";
    });
}

function fulll() {
  const link = localStorage.getItem("link");
  window.open(link, "_blank");
}

function winner() {
  if (
    box1.textContent == box2.textContent &&
    box1.textContent == box3.textContent
  ) {
    //scoring
    var val = parseInt(document.getElementById("skor").value, 10);
    val = isNaN(val) ? skr : val;
    val++;
    document.getElementById("skor").value = val;
    localStorage.setItem("score", val);
    const skor = localStorage.getItem("score");
    document.getElementById("skor").innerHTML = skor;
    //scoring
  }
}

function start() {
  shuffle.style.display = "none";
  var random = setInterval(shuff, 200);

  function shuff() {
    const x = "5px solid #" + ((Math.random() * 0x8a2be2) << 0).toString(16);
    const y = "5px solid #" + ((Math.random() * 0x8a2be2) << 0).toString(16);
    const z = "5px solid #" + ((Math.random() * 0x8a2be2) << 0).toString(16);
    box1.style.border = x;
    box2.style.border = y;
    box3.style.border = z;
  }

  //roll decreament from 15 (local storage)
  var value = parseInt(document.getElementById("lifeuse").value, 10);
  value = isNaN(value) ? liff : value;
  value--;
  document.getElementById("lifeuse").value = value;
  localStorage.setItem("life", value);
  const life = localStorage.getItem("life");
  document.getElementById("lifeuse").innerHTML = life;

  const rolling = setInterval(function () {
    const result = dice();
    box1.textContent = result[0];
    box2.textContent = result[1];
    box3.textContent = result[2];
  }, 70);

  setTimeout(function () {
    shuffle.style.display = "block";
    clearInterval(rolling);
    clearInterval(random);
    box1.style.border = "5px solid wheat";
    box2.style.border = "5px solid wheat";
    box3.style.border = "5px solid wheat";
    winner();
    if (life == "0") {
      //lose notification
      alert("Empty Roll Chance, you could reset the game...");
      shuffle.style.display = "none";
    }
    setTimeout(function () {
      //win notification
      var val = document.getElementById("skor").value;
      if (val == "2") {
        alert("Congratulation..!");
        shuffle.style.display = "none";
        reward();
        location.href = "#reward";
      }
    }, 100);
  }, 2000);
}

onload = function () {
  window.setInterval(function () {
    var t = shuffle;
    var z = "#" + ((Math.random() * 0xffffff) << 0).toString(16);
    t.style.backgroundColor = z;
  }, 400);

  setTimeout(function () {
    registerF.style.opacity = "1";
    registerF.style.transition = "opacity 1s";
    hai.style.opacity = "1";
    hai.style.transition = "opacity 1s";
    main.style.opacity = "1";
    main.style.transition = "opacity 1s";
    box1.style.opacity = "1";
    box1.style.transition = "opacity 1s";
    box2.style.opacity = "1";
    box2.style.transition = "opacity 1s";
    box3.style.opacity = "1";
    box3.style.transition = "opacity 1s";
  }, 500);

  setTimeout(function () {
    foot.style.opacity = "0.5";
    foot.style.transition = "opacity 1s";
  }, 1000);

  setTimeout(function () {
    profile.style.opacity = "1";
    profile.style.transition = "opacity 1s";
  }, 2000);

  setTimeout(function () {
    idtt.style.opacity = "0.5";
    idtt.style.transition = "opacity 1s";
    idt.style.opacity = "0.5";
    idt.style.transition = "opacity 1s";
  }, 3000);

  if (token && token != null) {
    homeSection.style.display = "none";
    startSection.style.display = "block";
    rewardSection.style.display = "block";
    navwrapper.style.visibility = "visible";
    profile.innerHTML = user;
    idtt.innerHTML = token;
  } else {
    homeSection.style.display = "block";
    startSection.style.display = "none";
    rewardSection.style.display = "none";
    navwrapper.style.visibility = "hidden";
  }

  if (lif == "0") {
    shuffle.style.display = "none";
  }

  if (score == "2") {
    shuffle.style.display = "none";
  }

  if (link != null) {
    let text = document.createElement("h1");
    text.textContent = desc;
    text.style.color = "rgb(68, 36, 82)";

    //set pic reward
    let img = new Image(300, 200);
    img.src = link;

    //set element
    rewardImage.appendChild(img);
    nameImage.appendChild(text);
    full.style.display = "block";
  }
};

function changeclr() {
  if (username.value != "") {
    username.style.backgroundColor = "wheat";
    username.style.color = "rgb(68, 36, 82)";
    username.style.width = "320px";
  } else {
    username.style.backgroundColor = "rgb(68, 36, 82)";
    username.style.color = "wheat";
  }
}

function dateyes() {
  if (brtvalue.value != "") {
    brtvalue.style.opacity = "0";
    brtvalue.style.transition = "opacity 0.2s";
    setTimeout(function () {
      brtvalue.style.opacity = "1";
      brtvalue.style.transition = "opacity 0.2s";
      brtreplace.style.backgroundColor = "wheat";
      brtreplace.style.color = "rgb(68, 36, 82)";
    }, 200);
  } else {
    brtvalue.style.backgroundColor = "rgb(68, 36, 82)";
    brtvalue.style.color = "wheat";
  }
}

setInterval(function(){
  if(scrollY != 0){
    topp.style.marginBottom = "unset"
  }else{
    topp.style.marginBottom = "-100px"
  }
}, 100)

function directing() {
  location.href = "#start";
}

function menu() {
  if(dd.innerHTML === '<i class="fa fa-caret-up"></i>'){
    dd.innerHTML = '<i class="fa fa-caret-down"></i>';
    mmenu.style.visibility = "hidden";
  }else{
    dd.innerHTML = '<i class="fa fa-caret-up"></i>';
    mmenu.style.visibility = "visible";
  }
  
}

function register() {
  player.username = username.value;
  player.birth = brtvalue.value;
  if (player.username == "") {
    alert("Fill Full Name...!");
  } else if (player.birth == "") {
    alert("Fill Birth Date...!");
  } else {
    player.register;
  }
}

function reset(){
  localStorage.setItem("life", 15);
  localStorage.setItem("score", 0);
  location.reload();
}

function logout() {
  player.logout;
}
