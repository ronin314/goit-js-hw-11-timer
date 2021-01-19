import timerParameters from '../timer-parameters.json';
import timerItem from '../templates/timer-item.hbs';

const timerDivRef = document.querySelector('#timer-1');
const timerMarkup = timerItem(timerParameters);
timerDivRef.insertAdjacentHTML('beforeend', timerMarkup);
