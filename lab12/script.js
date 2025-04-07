function generateMirrorDiamond(n) {
    if (n <= 0 || !Number.isInteger(n)) {
        return "Будь ласка, введіть ціле позитивне число для ромба.";
    }

    let diamond = "";
    const maxWidth = 2 * n - 1;

    for (let i = 1; i <= n; i++) {
        const numbers = Array.from({ length: i }, (_, k) => k + 1).join('') +
                         Array.from({ length: i - 1 }, (_, k) => i - 1 - k).join('');
        const padding = " ".repeat((maxWidth - numbers.length) / 2);
        diamond += padding + numbers + padding + "\n";
    }

    for (let i = n - 1; i >= 1; i--) {
        const numbers = Array.from({ length: i }, (_, k) => k + 1).join('') +
                         Array.from({ length: i - 1 }, (_, k) => i - 1 - k).join('');
        const padding = " ".repeat((maxWidth - numbers.length) / 2);
        diamond += padding + numbers + padding + "\n";
    }

    return diamond;
}

function calculateHarmonicSeriesSum(n) {
    if (isNaN(n) || n <= 0 || !Number.isInteger(n)) {
        return "Введено некоректне значення для n для суми ряду.";
    }

    let series = "";
    let sum = 0;

    for (let i = 1; i <= n; i++) {
        const term = 1 / i;
        series += "1/" + i;
        sum += term;
        if (i < n) {
            series += " + ";
        }
    }

    return { series: series, sum: sum };
}

function guessTheNumberGame() {
    const secretNumber = Math.floor(Math.random() * 100) + 1;
    let guess;
    let attempts = 0;

    alert("Гра 'Вгадай число'! Загадано число від 1 до 100.");

    while (true) {
        guess = parseInt(prompt("Введіть вашу спробу:"));
        attempts++;

        if (isNaN(guess)) {
            alert("Будь ласка, введіть число.");
        } else if (guess < secretNumber) {
            alert("Загадане число більше.");
        } else if (guess > secretNumber) {
            alert("Загадане число менше.");
        } else {
            alert(`Вітаємо! Ви вгадали число ${secretNumber} за ${attempts} спроб.`);
            break;
        }
    }
}

// Отримуємо контейнери для виводу
const diamondContainer = document.getElementById("diamond-container");
const seriesResultContainer = document.getElementById("series-result");

// Запитуємо розмір ромба
let diamondSize = parseInt(prompt("Введіть розмір ромба (ціле позитивне число):"));

// Генеруємо та виводимо ромб
let diamondText = generateMirrorDiamond(diamondSize);
diamondContainer.innerText = diamondText;

// Запитуємо значення n для суми ряду
let seriesN = parseInt(prompt("Введіть ціле додатне число n для обчислення суми ряду:"));

// Обчислюємо суму ряду та виводимо результат на сторінку
const seriesResult = calculateHarmonicSeriesSum(seriesN);
if (typeof seriesResult === 'object') {
    seriesResultContainer.innerText = `Числовий ряд: ${seriesResult.series}\nСума ряду S = ${seriesResult.sum}`;
} else {
    seriesResultContainer.innerText = seriesResult; // Виводимо повідомлення про помилку
}

// Запускаємо гру "Вгадай число"
guessTheNumberGame();
