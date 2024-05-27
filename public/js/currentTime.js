function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    document.getElementById('current-time').textContent = `Current time: ${timeString}`;
}
updateTime();
setInterval(updateTime, 1000);
