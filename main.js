'use strict';
const title = document.querySelector('.title'); 

if (localStorage.getItem('thanosDecision')) {
  title.innerHTML = localStorage.getItem('thanosDecision');
}
else {
  function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
  }
  let thanosRandom = getRandomNumber(50);

  if (thanosRandom<25) {const randomDestruction = title.innerHTML = `You were slain by Thanos, for the good of the Universe.`;
localStorage.setItem('thanosDecision', randomDestruction)
}
else {
  const randomLucky = title.innerHTML = `You were spared by Thanos.`;
  localStorage.setItem('thanosDecision', randomLucky)
}
}


