Pré configurações:
    instalar:
        node: https://nodejs.org/en/
        yarn: https://classic.yarnpkg.com/pt-BR/docs/install/#mac-stable
        docker: https://docs.docker.com/get-docker/
        make: https://stackoverflow.com/questions/32127524/how-to-install-and-use-make-in-windows
        env: adicionar um arquivo .env se baseando no .env.example

Rodar o projeto:
    Para rodar o banco tem que garantir que o dokcer está rodando na máquina:
        Subir o container com o banco local:
            make up
        Parar o container local:
            make down
    Rodar o projeto:
        yarn start
    Rodar um build do projeto em js:
        yarn build

Importar a collection e a environment do postman que já possuem todas as requisições do projeto

Se tiver alguma dúvida quanto a env essas foram utilizadas:
    NODE_ENV=dev
    SERVER_PORT=3000
    DB_HOST='localhost'
    DB_PORT=5435
    DB_USERNAME='compra_api'
    DB_DATABASE='compra_api'
    DB_PASS='modulo_compra_api'
    API_ESTOQUE='http://localhost:3005/'