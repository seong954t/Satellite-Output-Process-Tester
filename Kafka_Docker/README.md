# Kafka Docker Compose
- docker-compose를 사용하여 kafka 환경 구축

## Getting Start
1. git clone kafka-docker (https://github.com/wurstmeister/kafka-docker.git)
2. docker-compose.yml 파일 수정 (ip 주소는 해당 호스트의 ip 주소로 설정)
3. docker-compose 실행
```
docker-compose up -d (or -f)
```
* zookeeper 설정: https://stackoverflow.com/questions/48789422/apache-kafka-cluster-not-connecting-to-zookeeper-on-docker 참고