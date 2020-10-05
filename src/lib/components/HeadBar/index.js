import { html } from 'lit-html';
import CommonElement from '../__base__/CommonElement';

import style from './style.scss';

class HeadBar extends CommonElement {
  static get styles() {
    return [...super.styles, style];
  }

  static get properties() {
    return {
      _drawerOpen: { type: Boolean },
    };
  }

  constructor() {
    super();
    this._drawerOpen = false;
  }

  _onButtonClicked() {
    this._drawerOpen = !this._drawerOpen;
  }

  render() {
    return html`
      <header class="head-bar">
        <div class="head-bar__brand">
             <h1><a href="/">dmds.dev</a></h1>
        </div>
        <div class="head-bar__menu">
            <button @click="${this._onButtonClicked}">☰</button>
        </div>
        <nav class="head-bar__navigation ${this._drawerOpen ? 'open' : ''}">
            <h2>My Playgrounds</h2>
            <ul>
                <li><a href="https://tweety.dmds.dev" target="_blank">Twitter Clone</a></li>
                <li><a href="https://hungers.dmds.dev" target="_blank">Hunger Apps</a></li>
                <li><a href="https://movie-catalogue-pwas.web.app" target="_blank">Movie Catalogue</a></li>
            </ul>
        </nav>
      </header>
    `;
  }
}

customElements.define('head-bar', HeadBar);
