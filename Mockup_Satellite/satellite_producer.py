from kafka import KafkaProducer
import json


class SatelliteProducer(object):

    def __init__(self, server, topic):
        self.topic = topic
        self.server = server
        self.producer = KafkaProducer(bootstrap_servers=self.server, value_serializer=lambda v: json.dumps(v).encode('utf-8'))

    def publish_message(self, json_msg):
        self.producer.send(self.topic, value=json_msg).get(timeout=30)
