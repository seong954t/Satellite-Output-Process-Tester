# Kafka Server 모니터링 시스템

### 기능

Cluster된 Kafka Server의 데이터를 통해 해당 Server가 실행중인지 모니터링 한다.

### 실행 방법

RysncConsumer.py 내 Firebase RealTime Database URL 입력

![Firebase RealTime Database URL](../img/firebase-config.PNG)

    $ python kafka_monitor_start.py {서버 이름} {아이피:포트} {서버 이름} {아이피:포트} ...
    
    ex)
    $ python kafka_monitor_start.py kafka1 192.168.32.132:9092 kafka2 192.168.32.135:9092 kafka3 192.168.32.137:9092