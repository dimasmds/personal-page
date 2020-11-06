import { html } from 'lit-html';
import CommonElement from '../../__base__/CommonElement';

import style from './style.scss';

class AboutPage extends CommonElement {
  static get styles() {
    return [...super.styles, style];
  }

  render() {
    return html`
      <div class="about-page">
        <p>This is about page</p>
      </div>
    `;
  }
}

customElements.define('about-page', AboutPage);
