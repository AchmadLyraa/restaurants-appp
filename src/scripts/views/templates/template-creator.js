import CONFIG from '../../globals/config';

const createRestaurantItemTemplate = (image, restaurant) => `
  <div class="restaurant-card">
    <img tabindex="0" src="/placeholder.png" data-src="${image}" class="lazyload" alt="Ini adalah gambar restaurant ${restaurant.name}" crossorigin="anonymous" >
    <div tabindex="0" class="restaurant-name">${restaurant.name}</div>
    <div tabindex="0" class="restaurant-city">Kota: ${restaurant.city}</div>
    <div tabindex="0" class="restaurant-rating">Rating: ${restaurant.rating}</div>
    <a tabindex="0" href="/#/detail/${restaurant.id}" class="restaurant-link">Lihat Detail</a>
  </div>
`;

const createRestaurantDetailTemplate = (restaurant) => `
  <div class="restaurant-detail">
    <h2 class="restaurant__image" tabindex="0">${restaurant.name}</h2>
        <picture>
 
    <source media="(max-width: 600px)" srcset="${CONFIG.IMAGE_MEDIUM}/${
  restaurant.pictureId
}">
<img class="restaurant__image" src="${CONFIG.IMAGE_MEDIUM}/${
  restaurant.pictureId
}" class="lazyload"      alt="${
  restaurant.name
}" crossorigin="anonymous" tabindex="0" />
 
</picture>
    <div class="restaurant__info" tabindex="0">
      <h3 tabindex="0">Information</h3>
      <h4 tabindex="0">Address</h4>
      <p tabindex="0">${restaurant.address}, ${restaurant.city}</p>
      <h4 tabindex="0">Rating</h4>
      <p tabindex="0">${restaurant.rating}</p>
    </div>
    <div class="restaurant__description" tabindex="0">
      <h3 tabindex="0">Description</h3>
      <p tabindex="0">${restaurant.description}</p>
    </div>
    <div class="restaurant__menu" tabindex="0">
      <h3 tabindex="0">Menus</h3>
      <h4 tabindex="0">Foods</h4>
      <ul tabindex="0">
        ${restaurant.menus.foods
    .map((food) => `<li tabindex="0">${food.name}</li>`)
    .join('')}
      </ul>
      <h4 tabindex="0">Drinks</h4>
      <ul tabindex="0">
        ${restaurant.menus.drinks
    .map((drink) => `<li tabindex="0">${drink.name}</li>`)
    .join('')}
      </ul>
    </div>
    <div class="restaurant__reviews" tabindex="0">
      <h3 tabindex="0">Customer Reviews</h3>
      ${restaurant.customerReviews
    .map(
      (review) => `
            <div class="review" tabindex="0">
              <p tabindex="0"><strong>${review.name}</strong> (${review.date})</p>
              <p tabindex="0">${review.review}</p>
            </div>
          `
    )
    .join('')}
    </div>
  </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
