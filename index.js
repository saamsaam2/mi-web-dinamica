const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.get('/api/noticias', (req, res) => {
  const noticias = [
    { id: 1, titulo: 'Noticia 1', contenido: 'Contenido de la noticia 1' },
    { id: 2, titulo: 'Noticia 2', contenido: 'Contenido de la noticia 2' }
  ];
  res.json(noticias);
});

app.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}`);
});
