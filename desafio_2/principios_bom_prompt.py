# Recebe a entrada do usuário e armazena na variável "entrada"
entrada = input()

# Função responsável por receber um conceito e retornar sua respectiva descrição.
def principio_prompt(p):
  if p == "Clareza":
    return "Evita ambiguidades e facilita a compreensão da tarefa"

  # COMPLETE AQUI: Preencha corretamente cada conceito, considerando as descrições abaixo: 
  elif p == "Especificidade":
    return "Define detalhes e limitações da tarefa de forma precisa"

  elif p == "Contexto":
    return "Inclui informações que ajudam a IA a entender o cenário"

  elif p == "Objetividade":
    return "Foco naquilo que realmente importa para obter uma boa resposta"

print(principio_prompt(entrada))