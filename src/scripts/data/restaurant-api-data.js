import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantData {
  static async restaurantList() {
    const response = await fetch(API_ENDPOINT.ALL_LIST);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson;
  }

  static async imageRestaurant(id) {
    return API_ENDPOINT.IMAGE_MEDIUM(id);
  }

  // static async upcomingMovies() {
  // 	const response = await fetch(API_ENDPOINT.UPCOMING);
  // 	const responseJson = await response.json();
  // 	return responseJson.results;
  // }
}

export default RestaurantData;
