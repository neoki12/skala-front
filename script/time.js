function updateClock() {
    const now = new Date();

    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const date = now.getDate();
    const dayList = ['일', '월', '화', '수', '목', '금', '토'];
    const day = dayList[now.getDay()];

    document.getElementById('today-date').innerText = `${year}년 ${month}월 ${date}일 (${day}요일)`;

    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    document.getElementById('live-clock').innerText = `${hours}:${minutes}:${seconds}`;
}

updateClock();

setInterval(updateClock, 1000);