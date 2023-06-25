// Carga de fuente de manera diferida
function loadFonts() {
  var fontLink = document.createElement('link');
  fontLink.href = 'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;1,300;1,400;1,900&display=swap';
  fontLink.rel = 'stylesheet';
  document.head.appendChild(fontLink);
}

if (window.addEventListener) {
  window.addEventListener('load', loadFonts);
} else if (window.attachEvent) {
  window.attachEvent('onload', loadFonts);
}

// Crear sección de texto al hacer clic en la imagen
var image = document.querySelector('.image-burgos');
var description = document.querySelector('.description');

// Comprobamos en primer lugar que existan elementos de esas clases, si no el script se ejecutará en páginas que no tengan estos elementos y dará error
if (image && description) { 
  image.addEventListener('click', function() {
    if (description.style.display === 'none') {
      description.style.display = 'block';
    } else {
      description.style.display = 'none';
    }
  });
}