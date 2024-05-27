function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    document.getElementById('current-time').textContent = `Current time: ${timeString}`;
}
updateTime();
setInterval(updateTime, 1000);


function updateTime() {
    const now = new Date();
    const returnTime = new Date("2024-08-17T00:00:00"); // Assuming Kyle returns on June 1
    const remainingTime = returnTime - now;

    // Convert remaining milliseconds to seconds
    const remainingSeconds = Math.floor(remainingTime / 1000);

    // Update the countdown
    document.getElementById('countdown').textContent = `Seconds until Kyle is back: ${remainingSeconds}`;
}
updateTime();
setInterval(updateTime, 1000);
