const countDown = () => {
    const targetDate = new Date("May 8, 2022 00:00:00").getTime();
    const today = new Date().getTime();

    const gap = targetDate - today;
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const textDay = Math.floor(gap / day);
    const textHours = Math.floor(gap % day / hour);
    const textMinutes = Math.floor(gap % hour / minute);
    const textSeconds = Math.floor(gap % minute / second);

    document.querySelector('.day').innerText = textDay;
    document.querySelector('.hours').innerText = textHours;
    document.querySelector('.minutes').innerText = textMinutes;
    document.querySelector('.seconds').innerText = textSeconds;

}

setInterval(countDown, 1000);