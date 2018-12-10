from satellite_outer import SatelliteOuter


class SatelliteOuterProducer(SatelliteOuter):

    def __init__(self, kafka_producer):
        super(SatelliteOuterProducer, self).__init__()
        self.kafka_producer = kafka_producer

    def create_file(self, str_mode):
        file_name = super(SatelliteOuterProducer, self).create_file(str_mode)
        self.kafka_producer.publish_message(file_name)