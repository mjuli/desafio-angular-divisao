# Desafio Angular Divisão

Este é um projeto simples desenvolvido em Angular que implementa uma calculadora de divisão como parte de um desafio.

## Funcionalidades

- Realiza a divisão de dois números.
- Lida com casos de divisão por zero.
- Fornece uma interface simples para entrada de dados e exibição do resultado.

## Requisitos

- [Node.js](https://nodejs.org/) e [npm](https://www.npmjs.com/) instalados na sua máquina.
- Angular CLI - Você pode instalá-lo globalmente usando o comando:
  ```bash
  npm install -g @angular/cli
  ```

## Como usar

1. Clone este repositório para o seu ambiente local:

```bash
git clone https://github.com/mjuli/desafio-angular-divisao.git
```

2. Navegue até o diretório do projeto:

```bash
cd desafio-angular-divisao
```

3. Instale as dependências do projeto:

```bash
npm install
```

4. Inicie o servidor de desenvolvimento:

```bash
ng serve
```

5. A aplicação irá realizar o cálculo consultando um serviço externo que está salvo no repositório abaixo:
```
https://github.com/mjuli/desafio-dotnet-divisao
```
Desse modo, o serviço acima deverá estar sendo executado para que a aplicação funcione corretamente.

6. Feito isso, abra um navegador da web e navegue até `http://localhost:4200/` para ver a aplicação em funcionamento.

7. Insira dois números nos campos de entrada e clique no botão "Dividir" para ver o resultado da divisão.
