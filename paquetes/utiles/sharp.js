const sharp = require('sharp');

sharp('imagen.jpg')
    .resize(80)
    .grayscale()
    .toFile('imagen_resize.jpg');