import RestaurantData from '../../data/restaurant-api-data';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
      <section class="hero">

  <picture>
    <source media="(max-width: 600px) srcset="/images/hero-image_1_small.jpg">
    <img 
      class="img-hero lazyload" 
      src="/placeholder.png"
      data-src="/images/hero-image_1.jpg" 
      alt="Gambar Restoran"
    />
  </picture>
  
</section>
<section class="list-restaurant container">
  <h2 id="maincontent" tabindex="0">Daftar Restoran</h2>
  <div id="restaurant-list"></div>
</section>

    `;
  },

  async afterRender() {
    try {
      const data = await RestaurantData.restaurantList();
      const id = data.map((item) => item.pictureId);
      const restaurantList = document.getElementById('restaurant-list');
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

export default Home;
