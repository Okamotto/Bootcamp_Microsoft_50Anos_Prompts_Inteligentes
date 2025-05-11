# Projeto Podcast: Fase Secreta

Desafio de projeto para o Bootcamp Microsoft 50 Anos - Prompts Inteligentes.

---

## 📖 Sobre o Projeto
O **Fase Secreta** é um podcast focado no universo dos jogos de videogame, com destaque para consoles, dicas, novidades e curiosidades sobre jogos retrô. O objetivo é criar um conteúdo descontraído e informativo, com uma identidade visual e sonora marcante.

---

## 🛠️ Ferramentas Utilizadas
- **[ChatGPT](https://openai.com/index/chatgpt/):** Criação do roteiro e prompts.
- **[ElevenLabs](https://elevenlabs.io/app/home):** Geração da narração do podcast.
- **[OpenArt](https://openart.ai/home):** Criação da arte visual para a capa.

---

## 📋 Como Foi Feito
1. **Roteiro:**  
   - Criado com o ChatGPT, incluindo sugestões de nomes, curiosidades e estrutura do episódio.
   - Arquivo: [`Roteiro.md`](prompts/Roteiro.md)

2. **Narração:**  
   - Gerada com ElevenLabs a partir do roteiro.  
   - Arquivo: [`Narrador.md`](prompts/Narrador.md)  
   - Áudio: [`Narração`](medias/audio/ElevenLabs_2025-05-11T20_06_46_Deluca_pvc_sp100_s50_sb75_se0_b_m2.mp3)

3. **Capa:**  
   - Prompt criado com ChatGPT e imagem gerada no OpenArt.  
   - Arquivo: [`Capa.md`](prompts/Capa.md)  
   - Imagem: [`Arte`](medias/imagem/openart-image_3i7RG7ui_1746990270092_raw.jpg)

---

## ▶️ Instruções de Execução
1. **Roteiro:**  
   Leia o arquivo [`Roteiro.md`](prompts/Roteiro.md) para entender o conteúdo do episódio.

2. **Narração:**  
   Abra o arquivo [`Narrador.md`](prompts/Narrador.md) e reproduza o áudio gerado.

3. **Capa:**  
   Visualize a arte no arquivo [`Capa.md`](prompts/Capa.md) ou diretamente na pasta de imagens.

4. **Execução Completa:**  
   Combine o áudio da narração com a arte visual para criar o episódio final do podcast.

---

## 📂 Estrutura do Projeto
```plaintext
projeto_podcast/
├── prompts/
│   ├── Roteiro.md
│   ├── Narrador.md
│   ├── Capa.md
├── medias/
│   ├── audio/
│   │   └── ElevenLabs_2025-05-11T20_06_46_Deluca_pvc_sp100_s50_sb75_se0_b_m2.mp3
│   ├── imagem/
│       └── openart-image_3i7RG7ui_1746990270092_raw.jpg
└── README.md