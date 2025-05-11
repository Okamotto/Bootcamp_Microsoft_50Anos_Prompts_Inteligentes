# Documentação da API de Gerenciamento de Produtos

## Descrição Geral
A API de Gerenciamento de Produtos é uma solução desenvolvida para facilitar o gerenciamento de produtos em sistemas de e-commerce, inventários ou qualquer aplicação que necessite de controle de produtos. Ela permite a criação, leitura, atualização e exclusão (CRUD) de informações relacionadas aos produtos.

## Objetivos
- Prover uma interface simples e eficiente para gerenciar produtos.
- Garantir a integridade e segurança dos dados.
- Facilitar a integração com outras aplicações e sistemas.

## Funcionalidades
- **Listar Produtos**: Obter uma lista de todos os produtos cadastrados.
- **Consultar Produto**: Buscar informações detalhadas de um produto específico.
- **Adicionar Produto**: Inserir um novo produto no sistema.
- **Atualizar Produto**: Alterar informações de um produto existente.
- **Excluir Produto**: Remover um produto do sistema.

## Tecnologias Utilizadas
- **Backend**: Node.js com Express.js
- **Banco de Dados**: MongoDB
- **Autenticação**: JWT (JSON Web Token)
- **Documentação**: Swagger
- **Testes**: Jest

## Exemplos de Requisições e Respostas

### 1. Listar Produtos
**Requisição**:  
`GET /api/produtos`

**Resposta**:
```json
[
    {
        "id": "1",
        "nome": "Produto A",
        "preco": 100.0,
        "estoque": 50
    },
    {
        "id": "2",
        "nome": "Produto B",
        "preco": 200.0,
        "estoque": 30
    }
]
```

### 2. Adicionar Produto
**Requisição**:  
`POST /api/produtos`  
**Body**:
```json
{
    "nome": "Produto C",
    "preco": 150.0,
    "estoque": 20
}
```

**Resposta**:
```json
{
    "mensagem": "Produto adicionado com sucesso!",
    "produto": {
        "id": "3",
        "nome": "Produto C",
        "preco": 150.0,
        "estoque": 20
    }
}
```

### 3. Atualizar Produto
**Requisição**:  
`PUT /api/produtos/1`  
**Body**:
```json
{
    "preco": 120.0,
    "estoque": 60
}
```

**Resposta**:
```json
{
    "mensagem": "Produto atualizado com sucesso!",
    "produto": {
        "id": "1",
        "nome": "Produto A",
        "preco": 120.0,
        "estoque": 60
    }
}
```

### 4. Excluir Produto
**Requisição**:  
`DELETE /api/produtos/1`

**Resposta**:
```json
{
    "mensagem": "Produto removido com sucesso!"
}
```

## Instruções de Instalação
1. **Pré-requisitos**:
     - Node.js instalado (versão 14 ou superior).
     - MongoDB configurado e em execução.

2. **Clonar o Repositório**:
     ```bash
     git clone https://github.com/seu-usuario/api-gerenciamento-produtos.git
     cd api-gerenciamento-produtos
     ```

3. **Instalar Dependências**:
     ```bash
     npm install
     ```

4. **Configurar Variáveis de Ambiente**:
     Crie um arquivo `.env` na raiz do projeto e configure as seguintes variáveis:
     ```
     PORT=3000
     MONGO_URI=mongodb://localhost:27017/gerenciamento-produtos
     JWT_SECRET=sua_chave_secreta
     ```

5. **Iniciar o Servidor**:
     ```bash
     npm start
     ```

6. **Acessar a API**:
     A API estará disponível em `http://localhost:3000`.

## Contribuição
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

## Licença
Este projeto está licenciado sob a licença MIT. Consulte o arquivo `LICENSE` para mais detalhes.  