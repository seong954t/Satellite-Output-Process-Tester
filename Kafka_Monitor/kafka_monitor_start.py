from kafka_monitor import KafkaMonitor
import sys


def main():
    kafka_monitor = KafkaMonitor(sys.argv[1:])
    kafka_monitor.run()


if __name__ == '__main__':
    main()
