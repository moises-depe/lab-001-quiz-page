import { countsAsAYes } from './counts-as-a-yes.js';

const launchButton = document.getElementById('launch-button');
const results = document.getElementById('results');

launchButton.addEventListener('click', () => {
    const userName = prompt('What is your name?');

    const userHasConfirmed = confirm('Do you really want to take this quiz?');

    if (!userHasConfirmed) {
        alert('you have opted out. maybe next time!');
        return;
    }

    let correctAnswers = 0;

    const firstResponse = prompt('Are male donkeys called jacks?');

    if (countsAsAYes(firstResponse)) {
        correctAnswers++;
    }

    const secondResponse = prompt(`Okay ${userName}! do jennies lead the herd"?`);

    if (!countsAsAYes(secondResponse)) {
        correctAnswers++;
    }
    
    const thirdResponse = prompt(`Okay ${userName}! Do donkeys mate with any other species than their own?`);

    if (countsAsAYes(thirdResponse)) {
        correctAnswers++;
    }
    

    alert('Quiz complete! Check the page for your results');

    results.textContent = `Hey ${userName}, you got ${correctAnswers} right out of 3.`;
});