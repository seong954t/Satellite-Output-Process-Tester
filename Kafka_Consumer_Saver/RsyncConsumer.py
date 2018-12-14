from kafka import KafkaConsumer
import subprocess
import os
import sys
from firebase import firebase
import json


def main():
    # sys.argv[1] : topic
    # sys.argv[2] : satellite Server ip:port
    # sys.argv[3:] : [server ip:port, server ip:port, server ip:port, ...]
    consumer = KafkaConsumer(sys.argv[1], bootstrap_servers=sys.argv[3:],
                             enable_auto_commit=True, auto_offset_reset='earliest',
                             value_deserializer=lambda m: json.loads(m.decode('utf-8')))
    satellite_firebase = firebase.FirebaseApplication('INPUT FIREBASE REALTIME DATABASE URL', None)
    for msg in consumer:
        # print("Topic: %s, Partition: %d, Offset: %d, Key: %s, Value:%s" % (msg.topic, msg.partition, msg.offset, msg.key, msg.value))
        json_msg = msg.value
        file_path = json_msg['file']
        file_pre_path = '/'.join(file_path.split('/')[:-1])
        file_name = file_path.split('/')[-1]
        if not os.path.exists(file_pre_path):
            os.makedirs(file_pre_path)
        subprocess.call('rsync -avzr --delete -e ssh root@'+sys.argv[2]+':' + file_path + ' ' + file_pre_path, shell=True)
        satellite_firebase.put('saved_dir' + file_pre_path, file_name.split('.')[0], file_name.split('.')[-1])
        satellite_firebase.put('status/' + json_msg['mode'], 'saved_file', file_name)


if __name__ == '__main__':
    main()
