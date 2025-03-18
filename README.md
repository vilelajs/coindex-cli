# Coindex CLI
Interface de linha de comando escrita em Node.js para verificar preços de moedas.

![Last Commit](https://img.shields.io/github/last-commit/vilelajs/coindex-cli)
![Open Issues](https://img.shields.io/github/issues/vilelajs/coindex-cli)
![Open Pull Requests](https://img.shields.io/github/issues-pr/vilelajs/coindex-cli)

> [!NOTE]
> Solicitações não autenticadas com chave de API serão armazenadas em cache por 1 minuto. Para mais informações, acesse: [awesomeapi.com.br](https://awesomeapi.com.br/)

## Estrutura do projeto

- bin — é onde fica o arquivo principal da coindex CLI.
- src/commands — armazena os arquivos de comandos individuais.
- src/utils — é onde ficam as funções utilitárias que são usadas nos comandos, como formatação de dados.
- src/lib — aqui estão as funcionalidades principais da CLI, como a interação com APIs.

## Como usar?

No diretório raiz do projeto, execute o comando `npm i` e, em seguida,  `npm i -g` Após isso, é só executar "coindex" para ver o menu da CLI.

## Comandos

```bash
## Uso básico
# Ver versão
coindex -V

# Ver lista completa de combinações
coindex -c

# Ver lista de nomes (código) das moedas
coindex -l

# Ver documentação de comandos
coindex [comando] -h

## Comandos
# Ver a a última ocorrência das moedas selecionadas
coindex last <currency_code>

# Ver o fechamento dos últimos dias
coindex daily <currency_code> <number_days>

# Ver cotações sequenciais de uma única moeda (intervalo de 1 minuto)
coindex sqm <currency_code> <amount>
```
