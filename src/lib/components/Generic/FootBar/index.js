import { html } from 'lit-html';
import CommonElement from '../../__base__/CommonElement';

import style from './style.scss';

class FootBar extends CommonElement {
  static get styles() {
    return [...super.styles, style];
  }

  render() {
    return html`
      <footer class="foot-bar">
        <nav class="foot-bar__social-link">
            <ul>
                <li><a href="https://github.com/dimasmds"><img src="./icons/github.svg" alt="github"></a></li>
                <li><a href="https://www.linkedin.com/in/dimasmds/"><img src="./icons/linkedin.svg" alt="linkedin"></a></li>
                <li><a href="https://twitter.com/dimsmds"><img src="./icons/twitter.svg" alt="linkedin"></a></li>
            </ul>
        </nav>
      </footer>
    `;
  }
}

customElements.define('foot-bar', FootBar);
