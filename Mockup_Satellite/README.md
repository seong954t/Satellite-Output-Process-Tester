# 모의 위성 산출기

### 기능

1. 특정 촬영 모드를 실행/중지 시킬 수 있다.
2. 특정 촬영 모드 실행 시 주기적으로 촬영 파일을 생성한다.
3. 주기적으로 생성된 파일이 Kafka Producer를 통해 Kafka에 전달된다.

### 실행 방법

satellite_outer.py 내 Firebase RealTime Database URL 입력

![Firebase RealTime Database URL](../img/firebase-config.PNG)

    $ pip install -r requirements.txt
    $ python satellite_start.py {토픽} {아이피주소:포트} {아이피주소:포트} {아이피주소:포트} ... 
    
    ex)
    $ python satellite_start.py topic 127.0.0.1:9092 127.0.0.2:9092 127.0.0.3:9092 
    
    
RestFul

    request
        http://localhost:5002/start/<mode>/<interval>
        http://localhost:5002/stop/<mode>/
       
    response
        success: 'OK'