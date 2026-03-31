const express = require('express');
const app = express();

// O Render exige que usemos a porta que ele nos fornece
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('<h1>🚀 SISTEMA ONLINE!</h1><p>Se você está vendo isso, o deploy deu certo.</p>');
});

// IMPORTANTE: Não especifique o host como '0.0.0.0'
// O Render gerencia isso automaticamente
app.listen(PORT, () => {
    console.log(`Servidor ativo na porta ${PORT}`);
});
