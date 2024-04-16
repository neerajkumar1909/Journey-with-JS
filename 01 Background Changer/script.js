const text = document.querySelector('input');
const body = document.querySelector('body');
const para = document.getElementById('para')

// alert("Enter the Color name");
text.addEventListener('keyup', (e) => {
    const bgColor = e.target.value;
    body.style.backgroundColor = bgColor;
    if (bgColor === 'black') {
        text.style.color = 'white';
        para.style.color = 'white';
    }
    setTimeout(() => {
        resetColor();
    }, 5000)
})

function resetColor() {
    body.style.backgroundColor = 'white';
    text.value = '';
}