const dateTimeElement = document.getElementById("date-time");

function updateTime() {
  const now = new Date();
  const formattedTime = now.toLocaleString("en-US", {
    weekday: 'short',  // Include weekday (e.g., Mon)
    year: 'numeric',
    month: 'short',  // Include month (e.g., Jun)
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true  // Use 12-hour format (e.g., 3:16 PM)
  });
  dateTimeElement.textContent = formattedTime;
}

updateTime();
setInterval(updateTime, 1000);  // Update time every second
