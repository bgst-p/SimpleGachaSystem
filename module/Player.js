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
    localStorage.setItem("life", 15);
    localStorage.setItem("score", 0);
    localStorage.setItem("token", this.generateToken());
    localStorage.setItem("user", this._username);
    localStorage.setItem("birth", this._birth);
    registerForm.style.display = "none";
    logoutForm.style.display = "block";
    location.reload();
  }

  get logout() {
    localStorage.removeItem("desc");
    localStorage.removeItem("link");
    localStorage.removeItem("life");
    localStorage.removeItem("score");
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("birth");
    location.reload();
  }
}
