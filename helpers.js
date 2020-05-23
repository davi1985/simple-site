// show year
function showDate() {
  const date = new Date();
  dateElement = document.getElementById('year');
  dateElement.innerHTML = date.getFullYear();
}

showDate();
