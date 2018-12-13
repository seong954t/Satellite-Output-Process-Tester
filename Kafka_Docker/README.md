# Kafka Docker Compose
- docker-compose를 사용하여 kafka 환경 구축

## Getting Start

1. docker & docker-compose install

```
$ yum update
$ yum -y install docker
$ curl -L https://github.com/docker/compose/releases/download/1.18.0/docker-compose-`uname -s`-`uname -m` > /usr/local/bin/docker-compose
$ chmod +x /usr/local/bin/docker-compose
```

2. git clone kafka-docker (https://github.com/wurstmeister/kafka-docker.git)

```
$ git clone https://github.com/wurstmeister/kafka-docker.git
```

3. docker-compose.yml 파일 수정 (ip 주소는 각 호스트의 ip 주소로 설정)
```
...
zookeeper:
    ...
    envirionment:
        ...
        ZOOKEEPER_SERVER_ID: {id}
        ZOOKEEPER_SERVERS: {zookeeper1 ip}:2888:3888, {zookeeper2 ip}:2888:3888 ...
...
kafka:
    ...
    envirionment:
        ...
        KAFKA_BROKER_ID: {id}
        KAFKA_LISTENERS: PLAINTEXT://0.0.0.0:9092
        KAFKA_ADVERTISED_LISTENERS: PLAINTEXT://{호스트 ip}:9092
        KAFKA_CREATE_TOPICS: "{Topic 이름}:{Partiton 갯수}:{Replication factor}"
        KAFKA_ZOOKEEPER_CONNECT: {kafka1 ip}:2181, {kafka2 ip}:2181
...
```
4. docker-compose 실행
```
systemctl start docker.service
docker-compose up
```