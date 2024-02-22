const url = "https://api.adviceslip.com/advice";

const adviceElement = document.getElementById('advice');
const apiNumberElement = document.getElementById('apiNumber');
const dice = document.getElementById('dice');

async function getData() {
    const response = await fetch(url);
    const data = await response.json();

    const advice = data.slip.advice;
    const apiNumber = data.slip.id;

    adviceElement.textContent = (`"${advice}"`);
    apiNumberElement.textContent = apiNumber;
}

dice.addEventListener('click', getData);