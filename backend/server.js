require('dotenv').config();
const express = require('express');
const CryptoJS = require('crypto-js');
const cors = require('cors');
require('dotenv').config();  // Cargar las variables de entorno

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

// Obtener claves desde el archivo .env
const PUBLIC_KEY = process.env.PUBLIC_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

// Ruta para generar el hash y el timestamp
app.get('/auth', (req, res) => {
  const ts = new Date().getTime();  // Generar el timestamp
  const hash = CryptoJS.MD5(ts + PRIVATE_KEY + PUBLIC_KEY).toString();  // Generar el hash MD5

  res.json({ ts, hash, publicKey: PUBLIC_KEY });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
