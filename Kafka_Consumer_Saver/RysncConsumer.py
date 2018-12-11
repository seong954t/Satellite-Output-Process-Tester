from kafka import KafkaConsumer
import subprocess
import os
import sys
from firebase import firebase


def main():
    # sys.argv[1] : server ip : port
    # sys.argv[2] : topic
    consumer = KafkaConsumer(sys.argv[2], bootstrap_servers=sys.argv[1],
                             enable_auto_commit=True, auto_offset_reset='earliest')
    satellite_firebase = firebase.FirebaseApplication('https://satellite-d94ef.firebaseio.com/', None)
    for msg in consumer:
        print("Topic: %s, Partition: %d, Offset: %d, Key: %s, Value:%s" % (msg.topic, msg.partition, msg.offset, msg.key, msg.value.decode('utf-8')))
        file_path = msg.value.decode('utf-8')
        file_pre_path = '/'.join(file_path.split('/')[:-1])
        file_name = file_path.split('/')[-1]
        if not os.path.exists(file_pre_path):
            os.makedirs(file_pre_path)
        subprocess.call('rsync -avzr --delete -e ssh root@'+sys.argv[1]+':' + file_path + ' ' + file_pre_path, shell=True)
        satellite_firebase.put('saved_dir' + file_pre_path, file_name.split('.')[0], file_name.split('.')[-1])


if __name__ == '__main__':
    main()
