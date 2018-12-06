from kafka_producer import SatelliteProducer
from satellite_outer_producer import SatelliteOuterProducer
import sys


def main():
    kafka_producer = SatelliteProducer(sys.argv[1], sys.argv[2], sys.argv[3])
    satellite_outer_producer = SatelliteOuterProducer(kafka_producer)
    while True:
        input_txt = input()
        setting = input_txt.split(' ')[0]
        mode = input_txt.split(' ')[1]
        if setting == 'stop':
            satellite_outer_producer.stop_file_scheduling(mode)
        else:
            satellite_outer_producer.file_scheduling(mode)


if __name__ == '__main__':
    main()