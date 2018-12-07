![Satellite-Output-Process-Tester 구조](./img/Satellite-Output-Process-Tester-image.PNG)

### 관련 모듈 설치

    $ pip install -r requirements.txt

### 모의 인공위성 실행(①)
    
[Mock_Satellite_Tester 참고](./Mock_Satellite_Tester)
    
    $ python Mock_Satellite_Tester/main.py {아이피주소:포트} {토픽}
    
    ex)
    $ python Mock_Satellite_Tester/main.py 127.0.0.1:9092 topic
    
    run> start LA
    run> start FD
    run> stop LA
    
### Kafka Server Docker 실행(②)

[Kafka_Docker 참고](./Kafka_Docker)
    
    1. git clone kafka-docker (https://github.com/wurstmeister/kafka-docker.git)
    2. docker-compose.yml 파일 수정 (ip 주소는 해당 호스트의 ip 주소로 설정)
    3. docker-compose 실행
    
    ```
    $ docker-compose up -d (or -f)
    ```
    
    * zookeeper 설정: https://stackoverflow.com/questions/48789422/apache-kafka-cluster-not-conne

### Rsync Producer 실행(③)

[hyunwook 참고](./hyunwook)

    $ python RysncConsumer.py {아이피주소:포트} {토픽}

    ex)
    $ python RysncConsumer.py 127.0.0.1:9092 topic

TODO : Kafka Server Clustering