const renderLives = (livesTotal, livesCurrent) => {

  let icons = [];
  for (let i = livesTotal; i > 0; i--) {
    let type = i > livesCurrent ? 'empty' : 'full';
    icons.push(`<img src="img/heart__${type}.svg" class="game__heart" alt="Life" width="32" height="32">`);
  }
  return `<div class="game__lives">${icons.join('')}</div>`;
};

export default renderLives;
