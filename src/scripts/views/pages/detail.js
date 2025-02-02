import UrlParser from '../../routes/url-parser';
import RestaurantData from '../../data/restaurant-api-data';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const Detail = {
  async render() {
    return `
      <div id="restaurant" class="restaurant"></div>
			<div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurantsData = await RestaurantData.detailRestaurant(url.id);
    const restaurant = restaurantsData.restaurant;

    const restaurantper = document.getElementById('restaurant');
    const notFoundMessage = document.createElement('p');
    notFoundMessage.className = 'restaurant-item__not__found';
    notFoundMessage.textContent = 'Tidak ada restoran untuk ditampilkan';
    restaurantper.appendChild(notFoundMessage);

    const restaurantContainer = document.querySelector('#restaurant');
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);
    LikeButtonInitiator.init({
      favoriteRestaurants: FavoriteRestaurantIdb,
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        city: restaurant.city,
        description: restaurant.description,
        id: restaurant.id,
        name: restaurant.name,
        pictureId: restaurant.pictureId,
        rating: restaurant.rating,
      },
    });
  },
};

export default Detail;
