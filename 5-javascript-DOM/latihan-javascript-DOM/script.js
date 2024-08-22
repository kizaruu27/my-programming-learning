const p1Button = document.getElementById('p1-button');
const p2Button = document.getElementById('p2-button');
const p1Display = document.getElementById('p1-display');
const p2Display = document.getElementById('p2-display');
const resetButton = document.getElementById('reset');
const winPointOption = document.getElementById('winpoint');

let p1_score = 0;
let p2_score = 0;
let winPoint = 5;
let isGameOver = false;

p1Button.addEventListener('click', () => {
    if (!isGameOver) {
        p1_score += 1;
        if (p1_score >= winPoint) {
            p1Display.style.color = 'green';
            isGameOver = true;
        }
    }
    p1Display.textContent = p1_score;
});

p2Button.addEventListener('click', () => {
    if (!isGameOver) {
        p2_score += 1;
        if (p2_score >= winPoint) {
            p2Display.style.color = 'green';
            isGameOver = true;
        }
    }
    p2Display.textContent = p2_score;
});

function reset() {
    const defaultColor = '#f94f6d';

    isGameOver = false;
    p1_score = 0;
    p2_score = 0;
    p1Display.innerText = 0;
    p2Display.innerText = 0;
    p1Display.style.color = defaultColor;
    p2Display.style.color = defaultColor;
}

resetButton.addEventListener('click', reset);

// kalau pake arrow function
// pakai e.target.value
// winPointOption.addEventListener('change', (e) => {
//     winPoint = parseInt(e.target.value);
//     reset();
// });

// kalau pake penulisan function
// keyword this hanya ada pada function saja, tidak ada di dalam arrow function
winPointOption.addEventListener('change', function () {
    winPoint = parseInt(this.value);
    reset();
});