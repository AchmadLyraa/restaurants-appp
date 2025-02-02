import Detail from '../views/pages/detail.js';
import Home from '../views/pages/home.js';
import Favorites from '../views/pages/favorites.js';

const routes = {
  '/': Home, // default page
  '/home': Home, // default page
  '/favorites': Favorites, // default page
  '/detail/:id': Detail,
};

export default routes;
