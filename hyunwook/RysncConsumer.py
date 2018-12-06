from kafka import KafkaConsumer
import subprocess
import json

consumer = KafkaConsumer('RsyncTopic', group_id="Rsync", bootstrap_servers='localhost:9092', enable_auto_commit=True, auto_offset_reset='earliest')

for msg in consumer:
    print("Topic: %s, Partition: %d, Offset: %d, Key: %s, Value:%s" %(msg.topic, msg.partition, msg.offset, msg.key, msg.value.decode('utf-8')))
    if msg.value.decode('utf-8') == 'Execute Rsync':
        print("enter if")
        subprocess.call('/home/satreci/BackUpSolution/testShell/automata.sh' , shell=True)

