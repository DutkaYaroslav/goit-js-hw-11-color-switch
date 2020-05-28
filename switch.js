const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
];

const refs = {
    start: document.querySelector('button[data-action="start"]'),
    stop: document.querySelector('button[data-action="stop"]'),
    bodyColor: document.querySelector('body'),
};

let interval;

const startF = function () {
    interval = setInterval(() => {
        const randomIntegerFromInterval = (min, max) => {
            return Math.floor(Math.random() * (max - min + 1) + min);
        };

        refs.bodyColor.style.backgroundColor = `${
            colors[randomIntegerFromInterval(0, colors.length - 1)]
        }`;
    }, 1000);

    refs.start.setAttribute('disabled', 'true');
};

refs.start.addEventListener('click', startF);

const stopF = function () {
    clearInterval(interval);
    refs.start.removeAttribute('disabled');
};

refs.stop.addEventListener('click', stopF);
