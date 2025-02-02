import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import RestaurantData from '../../data/restaurant-api-data';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Favorites = {
  async render() {
    return `
      <section class="list-restaurant container">
				<h2 id="maincontent" tabindex="0">Restoran Favorite</h2>
				<div id="restaurant-list"></div>
			</section>
      <p class="restaurant-item__not__found"></p>
    `;
  },

  async afterRender() {
    try {
      const restaurantList = document.getElementById('restaurant-list');

      const data = await FavoriteRestaurantIdb.getAllRestaurants();
      console.log(data);
      const id = data.map((item) => item.pictureId);
      console.log(data);

      for (let i = 0; i < data.length; i++) {
        const image = await RestaurantData.imageRestaurant(id[i]);

        restaurantList.innerHTML += createRestaurantItemTemplate(
          image,
          data[i]
        );
      }
    } catch (error) {
      console.error('Error loading data:', error);
    }
  },
};

export default Favorites;
