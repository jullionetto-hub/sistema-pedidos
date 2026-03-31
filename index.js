const express = require('express');
const app = express();

// O Render exige que usemos a porta que ele nos fornece
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('<h1>🚀 Sistema de Pedidos Online Rodando!</h1>');
});

// Esta parte é OBRIGATÓRIA para o Render não fechar o sistema
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
