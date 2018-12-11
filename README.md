![Satellite-Output-Process-Tester 구조](./img/Satellite-Output-Process-Tester-image.PNG)

### 관련 모듈 설치

    $ pip install -r requirements.txt

### 모의 인공위성 실행(①)
    
[mockup_satellite 참고](Mockup_Satellite)
    
    ### 실행 방법

    $ pip install -r requirements.txt
    $ python satellite_start.py {아이피주소:포트} {토픽}
    
    ex)
    $ python main.py 127.0.0.1:9092 topic
    
    
RestFul

    request
        http://localhost:5002/start/<mode>/<interval>
        http://localhost:5002/stop/<mode>/
       
    response
        success: 'OK'
    
### Kafka Server Docker 실행(②)

[Kafka_Docker 참고](./Kafka_Docker)
    
    1. git clone kafka-docker (https://github.com/wurstmeister/kafka-docker.git)
    2. docker-compose.yml 파일 수정 (ip 주소는 해당 호스트의 ip 주소로 설정)
    3. docker-compose 실행
    
    ```
    $ docker-compose up -d (or -f)
    ```
    
    * zookeeper 설정: https://stackoverflow.com/questions/48789422/apache-kafka-cluster-not-conne

### Kafka Server Monitor 실행(③)

[Kafka_Monitor 참고](./Kafka_Monitor)

    $ python kafka_monitor_start.py {서버 이름} {아이피:포트} {서버 이름} {아이피:포트} ...
    
    ex)
    $ python kafka_monitor_start.py kafka1 192.168.32.132:9092 kafka2 192.168.32.135:9092 kafka3 192.168.32.137:9092

### Rsync Producer 실행(④)

[hyunwook 참고](Kafka_Consumer_Saver)

    $ python RysncConsumer.py {아이피주소:포트} {토픽}

    ex)
    $ python RysncConsumer.py 127.0.0.1:9092 topic

TODO : Kafka Server Clustering