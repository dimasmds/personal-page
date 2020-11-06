import { html } from 'lit-html';
import { outlet } from 'lit-element-router';
import CommonElement from '../../__base__/CommonElement';

import style from './style.scss';

class AppMain extends outlet(CommonElement) {
  static get styles() {
    return [...super.styles, style];
  }

  render() {
    return html`
      <slot></slot>
    `;
  }
}

customElements.define('app-main', AppMain);
