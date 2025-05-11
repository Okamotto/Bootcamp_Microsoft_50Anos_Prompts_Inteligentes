# Recebe a entrada do usuário e armazena na variável "entrada"
entrada = input()

# Função responsável por receber um conceito e retornar sua respectiva descrição.
def ajustar_prompt(estrategia):
  if estrategia == "Adicionar contexto":
    return "Permite que a IA entenda melhor a situação ou intenção"

  # COMPLETE AQUI: Preencha corretamente cada conceito, considerando as descrições abaixo:
  elif estrategia == "Usar exemplos":
    return "Ajuda a IA a replicar padrões esperados"

  elif estrategia == "Especificar formato da resposta":
    return "Garante que a saída seja apresentada do jeito desejado"

  elif estrategia == "Dividir tarefas complexas":
    return "Torna o problema mais simples e direcionado"

print(ajustar_prompt(entrada))