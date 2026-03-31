// ✅ CORRETO
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('<h1>🚀 SISTEMA ONLINE!</h1><p>Deploy funcionando!</p>');
});

app.listen(PORT, () => {
    console.log(`Servidor ativo na porta ${PORT}`);
});