

# Boas vindas ao repositório Futebol Clube! ⚽️

O app Trybe futebol clube, é uma aplicação que simula a classificação de times em um campeonato de acordo com o resultado das partidas. Teve como objetivo desenvolver uma API REST de placares de partidas de futebol utilizando Node.js, express, sequelizeORM e JWT. A aplicação foi feita usando o método TDD (Desenvolvimento Orientado a Testes) juntamento com POO (programação orientada a objetos), ela está totalmente dockerizada, tanto no front end quanto no back end, pois é uma aplicação web full stack, onde o front end já havia sido desenvolvido pela Trybe inicialmente. Os testes de integração foram feitos utilizando mocha e chai, e a biblioteca sinon para realizar os mocks das funções.

---

## Tecnologias Utilizadas
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)
![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
![Mocha](https://img.shields.io/badge/-mocha-%238D6748?style=for-the-badge&logo=mocha&logoColor=white)

* Express
* Typescript
* Sequelize - MySql
* Nodejs
* Docker
* Conceitos de POO
* Testes de integração com:
  - mocha
  - chai
  - sinon

## O que foi Desenvolvido

Aplicação dockerizada em `Node.js + Typescript` usando o pacote `sequelize`.


## O que precisa para rodar a aplição

 - Ambiente node configurado
 - docker e docker-compose instalados em maquina
 - OBS : O seu docker-compose precisa estar na versão 1.29 ou superior.

## Caso não tenha o docker e docker-compose instalados e deseje fazer a instalação, siga os passos abaixo:

### Instalação do docker(via repositórios) e docker-compose no Ubuntu (tutorial para versão Ubuntu 20.04.3 LTS)

  ### Desinstalando versões anteriores.
  
  1 - Versões mais antigas do Docker eram chamadas de `docker`, `docker.io`, ou `docker-engine`. Se estes estiverem instalados, desinstale-os:
  
  ```
  sudo apt-get remove docker docker-engine docker.io containerd runc
  ```


### Instalação usando o repositório.
> Antes de instalar o Docker Engine pela primeira vez em uma nova máquina host, você precisa configurar o repositório do Docker. Depois, você pode instalar e atualizar o Docker a partir do repositório.


  ### Configurar o repositório.
  
  1. Atualize o `apt` índice de pacotes executando o seguinte comando no seu terminal :

  ```
  sudo apt-get update
```

  2. Instale pacotes para permitir que o `apt` faça uso do repositório por HTTPS:
  
  ```
  sudo apt-get install \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg \
    lsb-release
  ```

  3. Adicione a chave GPG oficial do Docker

  ```
  curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
  ```
  ``
  Obs: Se tudo correr bem, você não deve receber nenhum retorno visual.
  ``

  4. Use o comando a seguir para configurar o repositório **estável**:

  ```
  echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
  ```
  
### Instalando Docker Engine.
  
  1. Atualize o `apt` índice de pacotes e instale a versão mais recente do Docker Engine e do containerd:

  ```
  sudo apt-get update
  ```
  em seguida:
  
  ```
  sudo apt-get install docker-ce docker-ce-cli containerd.io
  ```
  ---

### Instalação do docker-compose.

  ##### Instalação.

  1. Execute este comando para baixar a versão estável atual do Docker Compose:

  ```
  sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
  ```
  2. Aplique permissões executáveis ao binário:

  ```
  sudo chmod +x /usr/local/bin/docker-compose
  ```
  
  3. E se tudo ocorrer bem, para validar a instalação basta executar o seguinte comando:
  
  ```
  docker-compose --version
  ```
  `Devem ser exibidos os detalhes da versão instalada em seu terminal.`
  
  ---
  
## Após feita a instalação do Docker e Docker-compose, é hora de clonar a aplicação para sua máquina.


  ## Baixar e installar as depedências
   ```
   git clone git@github.com:Mathluiz23/futebol-clube.git
   ```
   
   ```
   cd futebol-clube/app
   ```
   ```
   npm install
   ```
  ---
  ## Executar a aplicação
  #### No diretorio /app execute o comando
  ```
  npm run compose:up
  ```
  ## Parar a aplicação
  #### No diretorio /app execute o comando
  ```
  npm run compose:down
  ```
  ## Rodar testes
  #### No diretorio /app execute o comando
  ```
  cd /backend
  ```
  ```
  npm test
  ```

# Como rodar o projeto localmente:
  - .
    ## Frontend:
    - Entre no diretório "frontend" `cd app/frontend` e execute o comando `npm start` para iniciar o front end da aplicação.
    - Ou acesse o seu navegador no endereço .[Link Acesso ao Front-end](http://localhost:3000/leaderboard).

    ## Backend:
    - Mude o nome do arquivo ".env.example" para ".env" e preencha com as informações do seu usuario MySQL
    - Case não tenha o MySql instalado, siga o [Tutorial](https://www.alura.com.br/artigos/mysql-do-download-e-instalacao-ate-sua-primeira-tabela?gclid=Cj0KCQjw06OTBhC_ARIsAAU1yOXB1KimL-aPJ6uv3yx6-rOoWZ5AGiEr4ewdQNHQNuy1IphJU_mO77kaAn3qEALw_wcB)
    - Entre no diretório "backend" `cd app/backend` e execute o comando `npm start` para iniciar o back end da aplicação
    - O backend será iniciado no endereço localhost:3001

  
## Login na aplicação

- Para manipular as partidas( adicionar ou editar ) você precisa fazer login na aplicação
- email: admin@admin.com
- password: secret_admin

  ## Gif da aplicação rodando

<img src="./fcApp.gif">




