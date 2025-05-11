const Joi = require('joi');

// Esquema de validação para produto
const produtoSchema = Joi.object({
  nome: Joi.string().min(3).required(),
  preco: Joi.number().positive().required(),
  descricao: Joi.string().optional()
});

module.exports = produtoSchema;