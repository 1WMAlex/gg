let messages = [
    "SUPPORT US ON RELEASE AT HTTPS://GUNGENS.SHOP!",
    "EXCITING RELEASE OF GUNGENS COMING SOON",
    "SAME GUNGENS, NEW IDEAS",
    "CLAIM YOUR RELEASE RANK ON OUR WEBSITE SOON"
];
let span = document.querySelector('.message');
let i = 0;

function showNextMessage() {
    span.classList.remove('fade-in');
    span.classList.add('fade-out');
    setTimeout(() => {
        span.classList.remove('fade-out');
        span.innerText = messages[i];
        span.classList.add('fade-in');
        i = (i + 1) % messages.length;
    }, 1000); // Delay to match the transition duration
}

setInterval(showNextMessage, 6000);
showNextMessage();

function countdown() {
    const now = new Date().getTime();
    const launchDate = new Date("July 14, 2024 00:00:00").getTime();
    const distance = launchDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;

    if (distance < 0) {
        document.getElementById('countdown').innerHTML = "We're Live!";
    }
}

setInterval(countdown, 1000);


