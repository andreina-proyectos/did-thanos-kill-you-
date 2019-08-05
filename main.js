'use strict';
const title = document.querySelector('.title'); 

function getRandomNumber(max) {
return Math.ceil(Math.random() * max);
}

if (localStorage.getItem('thanosDecision')) {
  title.innerHTML = localStorage.getItem('thanosDecision');
}
else {
  let thanosRandom = getRandomNumber(50);
  if (thanosRandom<25) {
  const randomDestruction = `You were slain by Thanos, for the good of the Universe.`;
  title.innerHTML = randomDestruction;
  localStorage.setItem('thanosDecision', randomDestruction)
  }
  else {
  const randomLucky = `You were spared by Thanos.`;
  title.innerHTML = randomLucky;
  localStorage.setItem('thanosDecision', randomLucky)
  }
  }


