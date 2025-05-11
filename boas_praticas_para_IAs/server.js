const express = require('express');
const produtoRoutes = require('./routes/produtoRoutes');

const app = express();
app.use(express.json()); // Permite receber JSON no corpo das requisições

app.use('/produtos', produtoRoutes); // Usa as rotas de produtos

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});