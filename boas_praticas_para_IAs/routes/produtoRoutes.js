const express = require('express');
const controller = require('../controllers/produtoController');

const router = express.Router();

router.get('/', controller.listarProdutos);
router.get('/:id', controller.obterProduto);
router.post('/', controller.criarProduto);
router.put('/:id', controller.editarProduto);
router.delete('/:id', controller.deletarProduto);

module.exports = router;