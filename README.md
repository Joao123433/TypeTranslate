# TypeTranslate - Projeto de Tradução com TypeScript

## Descrição
- Este código oferece uma funcionalidade simples de tradução de texto usando a API de Tradução MyMemory. Os usuários podem inserir texto, selecionar o idioma de origem e escolher o idioma de destino para a tradução.

## Recursos
- Traduzir texto de um idioma para outro.
- Suporte para vários idiomas de origem e destino.
- Mensagens de erro claras para um melhor feedback do usuário.

## Estrutura do Código
- `textTranslate:` Representa o elemento HTML textarea onde o texto traduzido será exibido.
- `interface Transalte:` Tipo para a estrutura da resposta de tradução.
- `fetchText:` Função assíncrona para buscar a tradução usando a API de Tradução MyMemory.
- `getInput:` Recupera o texto de entrada do usuário e lida com a validação.
- `clearInformation:` Limpa a área de exibição do texto traduzido.
- `errorInput:` Lida com erros de validação de entrada e exibe mensagens apropriadas.
- `getSelects:` Recupera os valores do elemento HTML select.
- `setError:` Exibe mensagens de erro na área de resultado da tradução.
- `settingTextTransalate:` Exibe o texto traduzido na página da web.
- `translate:` Função manipuladora de eventos para a submissão do formulário, aciona o processo de tradução.

## Dependências
- Este código depende da API de Tradução [MyMemory](https://mymemory.translated.net) para a tradução de idiomas.


## Link para o projeto
- https://joao123433.github.io/TypeTranslate/