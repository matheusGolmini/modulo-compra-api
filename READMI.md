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
