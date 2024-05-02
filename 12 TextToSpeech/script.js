let button = document.querySelector('.btn');
let text = document.querySelector('.text-area');

button.addEventListener('click', () => {
    let utterance = new SpeechSynthesisUtterance(text.value);

    speechSynthesis.speak(utterance);

})