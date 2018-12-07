from kafka import KafkaProducer


class SatelliteProducer(object):

    def __init__(self, server, topic):
        self.topic = topic
        self.server = server
        self.producer = KafkaProducer(bootstrap_servers=self.server)

    def publish_message(self, msg):
        self.producer.send(self.topic, value=msg.encode('utf-8')).get(timeout=30)
