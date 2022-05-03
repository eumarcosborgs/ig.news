<h1 align="center">
  Developed during ignite
</h1>

<p align="center">
  IGNEWS - Portal de notícias 📰🚀
  <br>
  <br>

  <img alt="Language count" src="https://img.shields.io/github/repo-size/eumarcosborgs/ignews"/>

  <a href="https://rocketseat.com.br">
    <img alt="Made by Rocketseat" src="https://img.shields.io/eumarcosborgs/made%20by-Rocketseat-%237519C1">
  </a>

  <a href="https://www.linkedin.com/in/eumarcosborgs/">
    <img alt="Made by eumarcosborgs" src="https://img.shields.io/badge/made%20by-eumarcosborgs-%237519C1">
  </a>

  <a href="https://github.com/eumarcosborgs/ignews/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/eumarcosborgs/ignews">
  </a>

  <img alt="License" src="https://img.shields.io/github/license/eumarcosborgs/ignews">
</p>

---

<p align="center">
  <a href="#dart-sobre">Sobre</a> &#xa0; | &#xa0; 
  <a href="#rocket-tecnologias">Tecnologias</a> &#xa0; | &#xa0;
  <a href="#white_check_mark-requerimentos">Requerimentos</a> &#xa0; | &#xa0;
  <a href="#checkered_flag-começando">Começando</a> &#xa0; &#xa0; | &#xa0;
  <a href="#framed_picture-imagens">Imagens</a> &#xa0; &#xa0;
</p>

<br>

## :dart: Sobre ##

O projeto ig.news é um blog onde os usuários podem ter acesso ao conteúdo de cada postagem de acordo com o status de sua assinatura.<br>
O blog possui um sistema de compra integrado com o STRIPE, e após o usuário realizar o pagamento, sua inscrição estará ativa e pronta para visualizar o conteúdo completo
de todo o blog. Caso o usuário não deseje optar pela assinatura, ele terá acesso limitado ao conteúdo das postagens. E todos os dados necessários para se fazer verificações
de assinaturas ou dados dos usuários, estão salvos no banco de dados FaunaDB.
<br>
<br>
Essa é uma aplicação Serverless, ou seja, todo o processo que dependeria de um backend foi integrado dentro do front e seguindo o padrão da JAMStack.
<br>
As postagens são feitas pelo painel do Prismic CMS e integradas diretamente pelo front.


## :rocket: Tecnologias ##

As seguintes tecnologias foram utilizadas no projeto:

- [Next.js](https://nextjs.org/)
- [SASS](https://sass-lang.com/)
- [Stripe](https://stripe.com/)
- [Prismic CMS](https://prismic.io/)
- [FaunaDB](https://fauna.com/)

## :white_check_mark: Requerimentos ##

- [Node](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/lang/en/)

## :checkered_flag: Começando ##

```bash
# Clone this project
$ git clone https://github.com/eumarcosborgs/ignews

# Access
$ cd ignews

# Install dependencies
$ yarn

# Add environment variables in env.local

# Run the project
$ yarn dev

# The server will initialize in the <http://localhost:3000>
```
<h1 align="center">
    <img alt = "Web app" src = "./.gihub/Screenshot_1" width = "750px" />
    <img alt = "Web app" src = "./.gihub/Screenshot_5" width = "750px" />
    <img alt = "Web app" src = "./.gihub/Screenshot_6" width = "750px" />
    <img alt = "Web app" src = "./.gihub/Screenshot_4" width = "750px" />
</h1>

## 📝 Licença

[MIT License](./LICENSE).

By [eumarcosborgs 💜](https://github.com/eumarcosborgs)


