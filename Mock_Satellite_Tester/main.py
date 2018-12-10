from satellite_producer import SatelliteProducer
from satellite_outer_producer import SatelliteOuterProducer
import sys
from flask import Flask
from flask_restful import Resource, Api


app = Flask(__name__)
api = Api(app)

kafka_producer = SatelliteProducer(sys.argv[1], sys.argv[2])
satellite_outer_producer = SatelliteOuterProducer(kafka_producer)


class RunMode(Resource):

    def get(self, mode, interval):
        satellite_outer_producer.set_mode_interval(mode.lower(), interval)
        satellite_outer_producer.file_scheduling(mode.lower())
        return 'OK'


class StopMode(Resource):

    def get(self, mode):
        satellite_outer_producer.stop_file_scheduling(mode.lower())
        return 'OK'


api.add_resource(RunMode, '/start/<mode>/<interval>')
api.add_resource(StopMode, '/stop/<mode>/')

if __name__ == '__main__':
     app.run(port='5002')
# def main():
#     # sys.argv[1] : server ip : port
#     # sys.argv[2] : topic
#     kafka_producer = SatelliteProducer(sys.argv[1], sys.argv[2])
#     satellite_outer_producer = SatelliteOuterProducer(kafka_producer)
#     while True:
#         input_txt = input()
#         setting = input_txt.split(' ')[0]
#         mode = input_txt.split(' ')[1]
#         interval = input_txt.split(' ')[2]
#         if setting == 'stop':
#             satellite_outer_producer.stop_file_scheduling(mode)
#         elif setting == 'start':
#             satellite_outer_producer.set_mode_interval(mode, interval)
#             satellite_outer_producer.file_scheduling(mode)
#
#
# if __name__ == '__main__':
#     main()