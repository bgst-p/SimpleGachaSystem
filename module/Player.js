class Player {
  constructor() {
    this._username = "";
    this._birth = "";
  }

  generateToken() {
    const random = ~~[Math.random() * 10000];
    const triming = this.username + random.toString();
    const token = triming.split(" ").join("");
    return token;
  }

  // setter method
  set username(_username) {
    return (this._username = _username);
  }

  // gettter method
  get username() {
    return this._username;
  }

  // setter method
  set birth(_birth) {
    return (this._birth = _birth);
  }

  // gettter method
  get birth() {
    return this._birth;
  }

  get register() {
    sessionStorage.setItem("life", 15);
    sessionStorage.setItem("score", 0);
    sessionStorage.setItem("token", this.generateToken());
    sessionStorage.setItem("user", this._username);
    sessionStorage.setItem("birth", this._birth);
    registerForm.style.display = "none";
    logoutForm.style.display = "block";
    location.reload();
  }

  get logout() {
    sessionStorage.removeItem("desc");
    sessionStorage.removeItem("link");
    sessionStorage.removeItem("life");
    sessionStorage.removeItem("score");
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("birth");
    location.reload();
  }
}
