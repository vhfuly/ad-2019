<div align ="center">

  <img src="/.github/logo.png"></img>

</div>

# Amigo secreto

É uma aplicação para fazer o cadastro de amigos e seus respectivos emails, após é posivel sortiar um amigo secreto. ( o amigo será enviado ao seu email)

## Instalação

Você precisará ter o [NodeJS](https://nodejs.org) para a ulilização do backend e para fazer o clone desse repositório.

comando para clonar o repositório :
```sh
  $ git clone https://github.com/vhfuly/ad-2019
```

## Executando a aplicação

Para executá-la é muito simples, basta rodar os seguintes comandos:

Na pasts forntend: 
```sh
  $ yarn add # para instalar as dependências 
```
Na pasta backend : 
```sh
  $ yarn add # para instalar as dependências 
```
No backend utilizei o Mailtrap para a visualização em desenvolvimento dos envios, mas para seus teste será necessario configurar o email localizado no /backend/src/config/mail.js
```sh
  host: "", # host do seu server de email
  port: , # porta do seu server de email
  auth: {
    user: "",# User do seu email
    pass: "" # porta do seu server de email
  },
  default : {
    from:'' # User do seu email
  },
}
```


## Link da aplicação 

No link abaixo é possível ter acesso ao site da aplicação:

[Getkcal](https://getkcaloria.netlify.app/) 