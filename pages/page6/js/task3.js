// Завдання 3: Визначення кліку на div з id="place"
document.addEventListener('DOMContentLoaded', function() {
  const placeDiv = document.getElementById('task3-place');

  window.addEventListener('click', function(event) {
      const clickedOnPlace = event.target === placeDiv || (placeDiv && placeDiv.contains(event.target));
      console.log('Клікнуто на div#place:', clickedOnPlace);
  });
});