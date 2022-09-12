# docker


Curso Docker - Alura

Documentação:
- geral
https://docs.docker.com/
- docker hub
https://hub.docker.com/
- builder image
https://docs.docker.com/engine/reference/builder/
- persistência de dados, volumes
https://docs.docker.com/storage/volumes/
- network bridge
https://docs.docker.com/network/bridge/
- docker compose
https://docs.docker.com/compose/


-----------------------------------------------------------------------------------------------------------------------

Comandos:

. desabilitar sudo
sudo usermod -aG docker $USER

. dowanload image
docker pull <IMAGE>

. inciar container
docker run [OPTIONS] IMAGE [COMMAND] [ARG...]
docker run <IMAGE>

. containers
docker ps -a
docker container ls -a

. containers em execução
docker ps

. stop container
docker stop <id> or <name>

. pause container
docker pause <id> or <name>
docker unpause <id> or <name>

. start container
docker start <id> or <name>

. executar container
docker exec -it <id> <comand>

. remover container
docker rm <id>

. porta em relação ao host
docker port <id>

. mapeamento de porta automático
docker run -d -P <image>

. mapeamento de porta
docker run -d -p <port-host>:<port-container> <image>

. visualizar imagens
docker images
docker image ls

. descrição image
docker inspect <id>

. camadas image
docker history <id>

. gerar imagem
docker build -t <name> <path>

. parar todos containers
docker stop $(docker container ls -q)

. autenticar docker
docker login -u <user>

. add repository
docker push <image>

. gerar copia de image
docker tag <image> <newImage>

. excluir todos containers
docker container rm $(docker container ls -aq)

. excluir image
docker rmi <id>

. excluir todas imagens
docker rmi $(docker image ls -aq)

. bind de diretorios (no host)
docker run -it -v <dir_host>:<dir_container> <image>
docker run -it --mount type=bind,source=<dir_host>,target=<dir_container> <image>

. volumes
docker volume ls

. criar volume
docker volume create <name>

. bind de volume (no host, docker area)
docker run -it -v <volume>:<dir_container> <image>
docker run -it --mount source=<volume>,target=<dir_container> <image>

. tmpfs (temporário no container)
docker run -it --tmpfs=<dir_container> <image>

. redes
docker network ls

. criar rede
docker network create --driver <tipo> <name>

. definir rede
docker run -it --name <nome_container> --network <nome_rede> <image>

--------------------------------------------------------------------------------------------------------------
Exemplos:

. nome contariner
docker run -it --name <nome> ubuntu bash

. sleep de um dia
docker run ubuntu sleep 1d

. agile bash
docker run -it <image> bash

. execute bash
docker exec -it <id> bash

. agile stop
docker stop -t=0 <id>

. -d não trava bash, roda em backgorund
docker run -d <id>

. force exclude
docker rm <id> --force
docker rmi $(docker image ls -aq) --force

. size
docker ps -s

. bind de diretorios host
docker run -it -v /home/volumes/volume_docker:/app ubuntu bash
docker run -it --mount type=bind,source=/home/volumes/volume_docker,target=/app ubuntu bash

. bind volumes
docker run -it -v volume:/app ubuntu bash
docker run -it --mount source=volume,target=/app ubuntu bash

. tmpfs
docker run -it --tmpfs=/app ubuntu bash

. criar rede
docker network create --driver bridge minha-bridge

. definir rede
docker run -it --name ubuntu1 --network minha-bridge ubuntu bash
