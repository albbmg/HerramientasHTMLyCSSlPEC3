var image = document.querySelector('.image-burgos');
var description = document.querySelector('.description');
image.addEventListener('click', function() {
  if (description.style.display === 'none') {
    description.style.display = 'block';
  } else {
    description.style.display = 'none';
  }
});