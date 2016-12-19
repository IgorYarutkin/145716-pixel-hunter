import renderLifes from './lives';
import renderTimer from './timer';

const header = (timer, livesTotal, livesCurrent) => {

  let element = `
  <header class="header">
    <div class="header__back">
      <span class="back">
        <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
        <img src="img/logo_small.png" width="101" height="44">
      </span>
    </div>`;
  if (timer) {
    element = element + `
      ${renderTimer(timer)}
      ${renderLifes(livesTotal, livesCurrent)}`;
  }
  element = element + '</header>';

  return element;
};

export default header;


