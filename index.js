const express = require('express');
const app = express();

// O Render define a porta automaticamente, por isso usamos process.env.PORT
const PORT = process.env.PORT || 3000;

// Rota principal para você testar no navegador
app.get('/', (req, res) => {
    res.send('<h1>🚀 Sistema de Pedidos Online Rodando!</h1><p>O servidor está ativo e pronto para o uso.</p>');
});

// Rota de exemplo para sua lista de pedidos futuramente
app.get('/pedidos', (req, res) => {
    const pedidos = [
        { id: 1, item: "Notebook", status: "Em transporte" },
        { id: 2, item: "Mouse", status: "Entregue" }
    ];
    res.json(pedidos);
});

// IMPORTANTE: Adicionamos '0.0.0.0' para o Render conseguir acessar o servidor
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Servidor rodando e ouvindo na porta ${PORT}`);
});
