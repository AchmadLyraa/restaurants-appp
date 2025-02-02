import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import App from './views/app';
import swRegister from './utils/sw-register';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const app = new App({
  button: document.querySelector('#hamburger'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});

// const skipLinkElem = document.querySelector(".skip-link-desk");
// skipLinkElem.addEventListener("click", (event) => {
// 	event.preventDefault();
// 	document.querySelector("#mainContent").focus();
// });

// document.addEventListener("DOMContentLoaded", () => {
// 	const mainElement = document.querySelector("main");
// 	const hamburgerButtonElement = document.querySelector("#hamburger");
// 	const drawerElement = document.getElementById("drawer");

// 	hamburgerButtonElement.addEventListener("click", (event) => {
// 		drawerElement.classList.toggle("open");
// 		event.stopPropagation();
// 	});

// 	mainElement.addEventListener("click", (event) => {
// 		drawerElement.classList.remove("open");
// 		event.stopPropagation();
// 	});
// });

// document.addEventListener("DOMContentLoaded", async () => {
// 	try {
// 		const data = await RestaurantData.restaurantList();
// 		const id = data.map((item) => item.pictureId);
// 		const restaurantList = document.getElementById("restaurant-list");

// 		for (let i = 0; i < data.length; i++) {
// 			const restaurant = data[i];
// 			const image = await RestaurantData.imageRestaurant(id[i]);

// 			const restaurantCard = document.createElement("div");
// 			restaurantCard.className = "restaurant-card";
// 			restaurantCard.innerHTML = `
//                 <img tabindex="0" src="${image}"
//                      alt="Ini adalah gambar restaurant ${restaurant.name}">
//                 <div tabindex="0" class="restaurant-name">${restaurant.name}</div>
//                 <div tabindex="0" class="restaurant-city">Kota: ${restaurant.city}</div>
//                 <div tabindex="0" class="restaurant-rating">Rating: ${restaurant.rating}</div>
// 								<a tabindex="0" href="" class="restaurant-link">Lihat Detail</a>
//             `;

// 			restaurantList.appendChild(restaurantCard);
// 		}
// 	} catch (error) {
// 		console.error("Error loading data:", error);
// 	}
// });
