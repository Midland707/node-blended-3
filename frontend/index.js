// import ruslan from "./js/ruslan";
import anna from "./js/anna";
// import "./css/ruslan.css";
import "./scss/main.scss";

// console.log(ruslan);
console.log(anna);

class User {
  #name;
  constructor(name) {
    this.#name = name;
  }
  getInfo() {
    console.log(this.#name);
  }
}
const ruslan = new User("Ruslan");
ruslan.getInfo();
