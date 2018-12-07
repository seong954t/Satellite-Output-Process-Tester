from kafka import KafkaConsumer
import subprocess
import os
import sys


def main():
    # sys.argv[1] : server ip : port
    # sys.argv[2] : topic
    consumer = KafkaConsumer(sys.argv[2], bootstrap_servers=sys.argv[1],
                             enable_auto_commit=True, auto_offset_reset='earliest')

    for msg in consumer:
        print("Topic: %s, Partition: %d, Offset: %d, Key: %s, Value:%s" % (msg.topic, msg.partition, msg.offset, msg.key, msg.value.decode('utf-8')))
        file_path = msg.value.decode('utf-8')
        path = file_path
        path = '/'.join(path.split('/')[:-1])
        if not os.path.exists(path):
            os.makedirs(path)
        subprocess.call('rsync -avzr --delete -e ssh root@'+sys.argv[1]+':' + file_path + ' ' + path, shell=True)


if __name__ == '__main__':
    main()
