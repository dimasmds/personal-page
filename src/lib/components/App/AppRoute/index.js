import { router } from 'lit-element-router';
import { html } from 'lit-html';
import CommonElement from '../../__base__/CommonElement';
import routes from '../../../routes';

import style from './style.scss';

import '../AppMain';
import '../../Home/HomePage';
import '../../About/AboutPage';

class AppRoute extends router(CommonElement) {
  static get properties() {
    return {
      route: { type: String },
      params: { type: Object },
      query: { type: Object },
    };
  }

  static get routes() {
    return [...routes];
  }

  static get styles() {
    return [...super.styles, style];
  }

  constructor() {
    super();
    this.route = '';
    this.params = {};
    this.query = {};
    this.data = {};
  }

  router(route, params, query, data) {
    this.route = route;
    this.params = params;
    this.query = query;
    this.data = data;
  }

  render() {
    return html`
      <app-main active-route="${this.route}">
        <home-page route="home"></home-page>
        <about-page route="about"></about-page>
      </app-main>
    `;
  }
}

customElements.define('app-route', AppRoute);
