import { html } from 'lit-html';
import CommonElement from '../../__base__/CommonElement';

import '../../Generic/FootBar';
import '../../Generic/HeadBar';

import style from './style.scss';

class HomePage extends CommonElement {
  static get styles() {
    return [...super.styles, style];
  }

  render() {
    return html`
        <head-bar></head-bar>
        <main class="home-page">
            <h2>Hi 👋</h2>
            <h3>I am Dimas <span id="nameSpeak" role="button" tabindex="1">🔊</span>!</h3>
            <p>Experience in <span class="green">[JavaScript, Kotlin]</span>, <span class="blue">Redux</span>, <span
                  class="yellow">[Web Components, React]</span>, and <span class="red">Testing</span>.</p>
        </main>
        <foot-bar></foot-bar>
        <audio id="nameAudio" src="./sounds/dimas.mp3"></audio>
    `;
  }

  firstUpdated(_changedProperties) {
    super.firstUpdated(_changedProperties);

    const mainAppContainer = this.shadowRoot.querySelector('main');
    const nameSpeakButton = this.shadowRoot.querySelector('#nameSpeak');

    mainAppContainer.addEventListener('click', () => {
      const headBar = this.shadowRoot.querySelector('head-bar');
      headBar._drawerOpen = false;
    });

    nameSpeakButton.addEventListener('click', () => {
      const nameAudio = this.shadowRoot.querySelector('#nameAudio');
      nameAudio.play();
    });
  }
}

customElements.define('home-page', HomePage);
