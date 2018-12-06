from kafka import KafkaProducer


class KafkaProducer(object):

    def __init__(self, path, topic, server):
        self.path = path
        self.topic = topic
        self.server = server

    def publish_message(self, msg):
        producer = KafkaProducer(bootstrap_servers=self.server)
        producer.send(self.topic, value=msg).get(timeout=30)