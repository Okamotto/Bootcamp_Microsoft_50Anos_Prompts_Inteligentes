const produtoSchema = require('../models/produtoModel');

// Simulação de banco de dados em memória
let produtos = [];

// Listar todos os produtos
exports.listarProdutos = (req, res) => {
  res.json(produtos);
};

// Obter um produto por ID
exports.obterProduto = (req, res) => {
  const produto = produtos.find(p => p.id === parseInt(req.params.id));
  if (!produto) return res.status(404).json({ erro: 'Produto não encontrado.' });
  res.json(produto);
};

// Criar um novo produto
exports.criarProduto = (req, res) => {
  const { error } = produtoSchema.validate(req.body);
  if (error) return res.status(400).json({ erro: error.details[0].message });

  const novoProduto = {
    id: produtos.length + 1,
    nome: req.body.nome,
    preco: req.body.preco,
    descricao: req.body.descricao || ''
  };
  produtos.push(novoProduto);
  res.status(201).json(novoProduto);
};

// Editar um produto existente
exports.editarProduto = (req, res) => {
  const produto = produtos.find(p => p.id === parseInt(req.params.id));
  if (!produto) return res.status(404).json({ erro: 'Produto não encontrado.' });

  const { error } = produtoSchema.validate(req.body);
  if (error) return res.status(400).json({ erro: error.details[0].message });

  produto.nome = req.body.nome;
  produto.preco = req.body.preco;
  produto.descricao = req.body.descricao || produto.descricao;

  res.json(produto);
};

// Deletar um produto
exports.deletarProduto = (req, res) => {
  const index = produtos.findIndex(p => p.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ erro: 'Produto não encontrado.' });

  produtos.splice(index, 1);
  res.status(204).send();
};