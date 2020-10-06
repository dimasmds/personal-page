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
                <li>
                  <a href="https://tweety.dmds.dev" target="_blank">
                      <h3>Twitter Clone</h3>
                      <p>My experimental project to learn how clean architecture and DDD implementing in Front-End Web. In this project, i use TypeScript, Redux, and LitElement</p>
                  </a>
                </li>
                <li>
                    <a href="https://wouldyourather.dmds.dev" target="_blank">
                      <h3>Would You Rather?</h3>
                      <p>Second Project of React Nanodegree from Udacity. In This Course I Learn How To React Apps with Real-World State Management with Redux,
                      Also, I Learn a Lot about Flux Pattern, Functional Approach in JavaScript, and Solving Many Tricky Case when Managing State in Redux.
                      Because of This Project, I Love React and Redux.</p>
                    </a>
                </li>
                <li>
                    <a href="https://hungers.dmds.dev" target="_blank">
                      <h3>Hunger Apps</h3>
                      <p>Final project of Menjadi Front-End Web Developer Expert Course. In This Course I Learn How To Build Website With Mobile First Approach,
                      Accessible for Everyone, Clean Code JavaScript, Progressive Web Apps, Testing, and Performance Optimization.</p>
                    </a>
                </li>
                <li>
                    <a href="https://movie-catalogue-pwas.web.app" target="_blank">
                        <h3>Movie Catalogue</h3>
                        <p>Practice Project of Menjadi Front-End Web Developer Expert Course. In This Project I Learn How to Implementing Progressive Website 
                        with Many Native Capabilities Such As Work Offline, Installable, Notification, Local Storage, Web Socket.</p>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/dimasmds/platform-event-mobile" target="_blank">
                        <h3>Dicoding Event Mobile</h3>
                        <p>My Experimental Project to Upskilling my Android Development. In This Project I Build Mobile Application of Dicoding Event
                        with Native Apps Capability. Also, I Learn a Lot About Dependency Injection using Koin, Networking using Retrofit, How
                         Modularization Implement in Android Native, TDD in Android, and Many More.</p>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/dimasmds" target="_blank">
                        <h3>Many More</h3>
                        <p>See My Github Repository for Exploring My Experimental Project More, I Love Learn Something New. 😊</p>
                    </a>
                </li>
            </ul>
        </nav>
      </header>
    `;
  }
}

customElements.define('head-bar', HeadBar);
