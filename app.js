const searchInput = document.getElementById('input');
const boxes = document.querySelectorAll('.box1');

searchInput.addEventListener('input', function() {
  const searchText = searchInput.value.toLowerCase();

  boxes.forEach(function(box) {
    const boxText = box.textContent.toLowerCase();

    if (boxText.includes(searchText)) {
      box.style.display = 'flex';
    } else {
      box.style.display = 'none';
    }
  });
});
