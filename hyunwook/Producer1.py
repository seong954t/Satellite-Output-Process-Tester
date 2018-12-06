from kafka import KafkaProducer

producer = KafkaProducer(bootstrap_servers='localhost:9092')
producer.send('RsyncTopic', value=b'Execute Rsync').get(timeout=30)
print("send message")

