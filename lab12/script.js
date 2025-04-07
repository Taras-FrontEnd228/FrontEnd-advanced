function generateMirrorDiamond(n) {
    if (n <= 0 || !Number.isInteger(n)) {
        return "Будь ласка, введіть ціле позитивне число.";
    }

    let diamond = "";
    const maxWidth = 2 * n - 1; // Максимальна ширина рядка з цифрами

    // Верхня частина ромба
    for (let i = 1; i <= n; i++) {
        const numbers = Array.from({ length: i }, (_, k) => k + 1).join('') +
                         Array.from({ length: i - 1 }, (_, k) => i - 1 - k).join('');
        const padding = " ".repeat((maxWidth - numbers.length) / 2);
        diamond += padding + numbers + padding + "\n";
    }

    // Нижня частина ромба
    for (let i = n - 1; i >= 1; i--) {
        const numbers = Array.from({ length: i }, (_, k) => k + 1).join('') +
                         Array.from({ length: i - 1 }, (_, k) => i - 1 - k).join('');
        const padding = " ".repeat((maxWidth - numbers.length) / 2);
        diamond += padding + numbers + padding + "\n";
    }

    return diamond;
}

// Отримання розміру ромба від користувача
let size = parseInt(prompt("Введіть розмір ромба (ціле позитивне число):"));

// Генерація та виведення ромба в контейнер
let diamondText = generateMirrorDiamond(size);
document.getElementById("diamond-container").innerText = diamondText;