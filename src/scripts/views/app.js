import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

class App {
  constructor({ button, drawer, content }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
    });

    // kita bisa menginisiasikan komponen lain bila ada
  }
  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
    const skipLink = document.querySelector('.skip-link-desk');
    const mainContent = document.getElementById('mainContent');
    skipLink.addEventListener('click', (event) => {
      event.preventDefault();
      mainContent.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      skipLink.blur();
    });
  }
}

export default App;
