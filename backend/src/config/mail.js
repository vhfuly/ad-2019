module.exports =  {
  /**
   * Estou utilizando o mailtrap apenas para o desenvolvimento,
   * para aplicação em produção deve ser usado o email e configuração do cliente.
   */
  host: "smtp.mailtrap.io",
  port: 2525,
  secure: false,
  auth: {
    user: "6bb37d0f5272a7",
    pass: "63d5f54b53fc0c"
  },
  default : {
    from:'Equipe Amigo noreply@equipeamigo.com'
  },
}