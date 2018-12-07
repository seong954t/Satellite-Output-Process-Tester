READ ME
========
# 구조
Producer.py가 카프카 통신(bootstrap server local:9092 사용)을 통해 특정 메시지를 전송하면 RsyncConsumer.py가 kafka consumer를 사용해서 쉘 스크립트인 automata.sh를 실행시킵니다. automata.sh 는 rsync를 실행시켜서 사용자가 지정한 src 디렉토리의 파일을 dst 디렉토리로 복사합니다. 


# RsyncConsumer.py
value값이 'Execute Rsync'이 메시지를 받으면 automata.sh 를 실행시키도록 구성이 되어 있습니다.
subprocess를 사용할 때 automata.sh의 경로를 지정해 주어야 합니다.
기본적으로 반복분 poll 구조이기 때문에 실행시켜놓으면 사용자가 직접 종료하기 전까진 메시지가 들어올 때마다 작동합니다.


# automata.sh
rsync 명령어가 포함되어 있는 스크립트 쉘입니다. 
rsync 명령어에서 src 디렉토리 경로와 dst 디렉토리 경로는 변수로 지정되어 있기 때문에 사용하실때 경로설정을 해주셔야 합니다.
현재 local 디렉토리간의 백업만 확인하였습니다. 원격 복사는 추가적인 설정이 필요한 것 같아 테스트해보고 추가하겠습니다.
rsync의 상세 기능에 대한 정보는 confluence의 '자료관리 > 자료백업 > Rsync기능설명' 페이지에 작성되어 있습니다.
