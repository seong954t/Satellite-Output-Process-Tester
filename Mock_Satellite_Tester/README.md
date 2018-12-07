# 모의 위성 산출기

### 기능

1. 특정 촬영 모드를 실행/중지 시킬 수 있다.
2. 특정 촬영 모드 실행 시 주기적으로 촬영 파일을 생성한다.
3. 주기적으로 생성된 파일이 Kafka Producer를 통해 Kafka에 전달된다.

### 실행 방법

    $ pip install -r requirements.txt
    $ python main.py {아이피주소:포트} {토픽}
    
    ex)
    $ python main.py 127.0.0.1:9092 topic
    
    run> start LA
    run> start FD
    run> stop LA