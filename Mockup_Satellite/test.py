from kafka import KafkaProducer
from kafka import KafkaConsumer
import sys

topic = 'docker-topic'
server = ['192.168.32.141:9092', '192.168.100.67:9092']


def publish_message(msg):
    print(msg)
    producer = KafkaProducer(bootstrap_servers=server)
    print(producer)
    producer.send(topic, value=msg.encode('utf-8')).get(timeout=30)
    print("test")


def test_consumer():
    consumer = KafkaConsumer(topic, bootstrap_servers=server, enable_auto_commit=True, auto_offset_reset='earliest')
    print(consumer)
    for msg in consumer:
        print("Topic: %s, Partition: %d, Offset: %d, Key: %s, Value: %s"
              % (msg.topic, msg.partition, msg.offset, msg.key, msg.value))


if __name__ == '__main__':
    if sys.argv[1] == 'producer':
        print(sys.argv[1])
        publish_message(sys.argv[2])
    else:
        test_consumer()
