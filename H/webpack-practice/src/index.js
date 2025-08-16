import { greeting } from "./greeting.js";
import "./style.css";
import image from "./pic.png";
console.log(greeting());



let pic = document.createElement("img");
pic.src = image;
pic.style.height = "150px";
pic.style.borderRadius = "100px";

document.body.appendChild(pic);

document.querySelector("h2").style.color = "grey";

