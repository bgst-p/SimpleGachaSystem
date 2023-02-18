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
const idttt = document.getElementById("idttt");
const idtt = document.getElementById("idtt");
const idt = document.getElementById("idt");
const brtvalue = document.getElementById("birth");
const brtreplace = document.getElementById("birth");
const mmenu = document.getElementById("mmenu");
const navwrapper = document.getElementById("navwrapper");
const hai = document.getElementById("infop");
const profile = document.getElementById("profile");
const topp = document.getElementById("topp");
const shuffle = document.getElementById("shuffle");
const foot = document.getElementById("foot");
const user = sessionStorage.getItem("user");
const link = sessionStorage.getItem("link");
const desc = sessionStorage.getItem("desc");
const token = sessionStorage.getItem("token");
const lif = sessionStorage.getItem("life");
const liff = parseInt(lif);
const score = sessionStorage.getItem("score");
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
      //set nama hadiah reward
      let text = document.createElement("h1");
      text.textContent = result.name + ".img";
      var imn = text.textContent;
      sessionStorage.setItem("desc", imn);
      text.style.color = "blueviolet";

      //set gambar hadiah
      let img = new Image(300, 200);
      img.src = result.image_link;
      var imj = img.src;
      sessionStorage.setItem("link", imj);

      //set element
      rewardImage.appendChild(img);
      nameImage.appendChild(text);
      full.style.display = "block";
      full.style.transition = "display 0.5s";
    });
}

function fulll() {
  const link = sessionStorage.getItem("link");
  window.open(link, "_blank");
}

function winner() {
  if (
    box1.textContent == box2.textContent &&
    box1.textContent == box3.textContent
  ) {
    //skoring
    var val = parseInt(document.getElementById("skor").value, 10);
    val = isNaN(val) ? skr : val;
    val++;
    document.getElementById("skor").value = val;
    sessionStorage.setItem("score", val);
    const skor = sessionStorage.getItem("score");
    document.getElementById("skor").innerHTML = skor;
    //skoring
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

  //kesempatan roll decreament from 20 (session storage)
  var value = parseInt(document.getElementById("lifeuse").value, 10);
  value = isNaN(value) ? liff : value;
  value--;
  document.getElementById("lifeuse").value = value;
  sessionStorage.setItem("life", value);
  const life = sessionStorage.getItem("life");
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
    box1.style.border = "5px solid blueviolet";
    box2.style.border = "5px solid blueviolet";
    box3.style.border = "5px solid blueviolet";
    winner();
    if (life == "0") {
      //notifikasi kalah
      alert("Kesempatan Roll Habis..");
      shuffle.style.display = "none";
    }
    setTimeout(function () {
      //notifikasi menang
      var val = document.getElementById("skor").value;
      if (val == "2") {
        alert("Selamat, Anda Berhasil..!");
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
    idttt.style.opacity = "0.5";
    idttt.style.transition = "opacity 1s";
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
    text.style.color = "blueviolet";

    //set gambar hadiah
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
    username.style.backgroundColor = "white";
    username.style.color = "black";
    username.style.width = "320px";
  } else {
    username.style.backgroundColor = "blueviolet";
    username.style.color = "white";
  }
}

function dateyes() {
  if (brtvalue.value != "") {
    brtvalue.style.opacity = "0";
    brtvalue.style.transition = "opacity 0.2s";
    setTimeout(function () {
      brtvalue.style.opacity = "1";
      brtvalue.style.transition = "opacity 0.2s";
      brtreplace.style.backgroundColor = "white";
      brtreplace.style.color = "black";
    }, 200);
  } else {
    brtvalue.style.backgroundColor = "blueviolet";
    brtvalue.style.color = "white";
  }
}

window.onscroll = function (ev) {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    topp.style.display = "block";
    setTimeout(function () {
      topp.style.opacity = "1";
      topp.style.transition = "opacity 1s";
    }, 850);
  }
};

function directing() {
  location.href = "#start";
}

function menu() {
  mmenu.style.visibility = "visible";
}

function menuo() {
  mmenu.style.visibility = "hidden";
}

function register() {
  player.username = username.value;
  player.birth = brtvalue.value;
  if (player.username == "") {
    alert("Isikan nama lengkap...!");
  } else if (player.birth == "") {
    alert("Atur tanggal lahir...!");
  } else {
    player.register;
  }
}

function logout() {
  player.logout;
}
