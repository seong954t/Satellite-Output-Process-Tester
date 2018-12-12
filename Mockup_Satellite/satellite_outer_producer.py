from satellite_outer import SatelliteOuter
import json


class SatelliteOuterProducer(SatelliteOuter):

    def __init__(self, kafka_producer):
        super(SatelliteOuterProducer, self).__init__()
        self.kafka_producer = kafka_producer

    def create_file(self, str_mode):
        file_name = super(SatelliteOuterProducer, self).create_file(str_mode)
        json_msg = {
            'mode': str_mode,
            'file': file_name
        }
        self.kafka_producer.publish_message(json_msg)
