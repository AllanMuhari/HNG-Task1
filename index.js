/** @format */

function updateDateTime() {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const currentDate = new Date();
  const currentDay = daysOfWeek[currentDate.getUTCDay()];
  const currentTime = currentDate.getTime();

  document.getElementById("currentDay").textContent = currentDay;
  document.getElementById("currentTime").textContent = currentTime;
}

setInterval(updateDateTime, 1000);

updateDateTime();
