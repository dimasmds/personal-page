// High-level node package dependencies
import 'regenerator-runtime';

// Component Inject
import './lib/components';

// Style inject
import './styles/main.scss';

// High-level dependencies
import registerSW from './utils/register-sw';

// eslint-disable-next-line no-console
window.addEventListener('DOMContentLoaded', async () => {
  const mainAppContainer = document.querySelector('#mainApp');
  const nameSpeakButton = document.querySelector('#nameSpeak');

  mainAppContainer.addEventListener('click', () => {
    const headBar = document.querySelector('head-bar');
    // @ts-ignore
    headBar._drawerOpen = false;
  });

  nameSpeakButton.addEventListener('click', () => {
    const nameAudio = document.querySelector('#nameAudio') as HTMLAudioElement;
    nameAudio.play();
  });

  await registerSW();
});
