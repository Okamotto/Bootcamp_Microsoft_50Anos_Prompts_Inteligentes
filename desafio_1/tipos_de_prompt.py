# Recebe a entrada do usuário e armazena na variável "entrada"
entrada = input()

# Função responsável por receber um conceito e retornar sua respectiva descrição:
def descrever_prompt(tipo):
  if tipo == "Prompt de Instrução":
    return "Indica claramente o que o modelo deve fazer"
  
  # COMPLETE AQUI: Preencha corretamente cada conceito, considerando as descrições abaixo: 
  elif tipo == "Prompt de Pergunta":
    return "Formato mais direto, faz uma pergunta para obter uma resposta específica"

  elif tipo == "Prompt com Exemplos":
    return "Usado para fornecer um conjunto de exemplos antes da tarefa"

  elif tipo == "Prompt de Contexto":
    return "Fornece informações antecedentes para guiar a resposta"

print(descrever_prompt(entrada))