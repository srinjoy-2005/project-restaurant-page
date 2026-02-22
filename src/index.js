import "./styles.css";
import displayHome from "./home.js";
import displayMenu from "./menu.js";
import displayAbout from "./about.js";

displayHome();

const homeButton = document.getElementById("home-button");
homeButton.addEventListener("click", displayHome);

const menuButton = document.getElementById("menu-button");
menuButton.addEventListener("click", displayMenu);

const aboutButton = document.getElementById("about-button");
aboutButton.addEventListener("click", displayAbout);