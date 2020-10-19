import { html } from 'lit-html';
import CommonElement from '../__base__/CommonElement';
import style from './style.scss';
import { AnnounceColor } from './config';

class AnnounceBar extends CommonElement {
  static get properties() {
    return {
      _color: { type: String },
      _show: { type: Boolean },
    };
  }

  static get styles() {
    return [...super.styles, style];
  }

  constructor() {
    super();
    this._color = AnnounceColor.BLUE;
    this._show = true;
  }

  _onClose() {
    this._show = false;
  }

  render() {
    return html`
      <div class="announce-bar ${this._show ? 'show' : ''}" style="background-color: ${this._color}">
        <p>
            <slot></slot>
        </p>
        <button @click="${this._onClose}">X</button>
      </div>
    `;
  }
}

customElements.define('announce-bar', AnnounceBar);
