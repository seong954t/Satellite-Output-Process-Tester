from kafka import KafkaProducer
from kafka.errors import NoBrokersAvailable
from firebase import firebase
import threading


class KafkaMonitor(object):

    def __init__(self, config):
        self.satellite_firebase = firebase.FirebaseApplication('https://satellite-d94ef.firebaseio.com/', None)
        self.config_dic = {}
        for idx in range(0, len(config), 2):
            self.config_dic[config[idx]] = {
                'address': config[idx+1],
                'connected': True
            }
        self.satellite_firebase.delete('/', 'cluster')
        self.satellite_firebase.put('/', 'cluster', self.config_dic)

    def run(self):
        for broker_name in self.config_dic.keys():
            t = threading.Thread(target=self.monitoring, args=([broker_name]))
            t.start()

    def monitoring(self, broker_name):
        ip_address = self.config_dic[broker_name]['address']
        while True:
            try:
                KafkaProducer(bootstrap_servers=ip_address, request_timeout_ms=3000)
                if not self.config_dic[broker_name]['connected']:
                    self.config_dic[broker_name]['connected'] = True
                    self.satellite_firebase.put('cluster/'+broker_name, 'connected', True)
            except NoBrokersAvailable:
                if self.config_dic[broker_name]['connected']:
                    self.config_dic[broker_name]['connected'] = False
                    self.satellite_firebase.put('cluster/' + broker_name, 'connected', False)
