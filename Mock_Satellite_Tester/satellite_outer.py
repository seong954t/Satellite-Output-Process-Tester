import datetime
import os
from threading import Timer


class SatelliteOuter(object):

    def __init__(self):
        self.mode_dic = {
            'FD': {
                'interval': 10,
                'thread': Timer
            },
            'ELA': {
                'interval': 5,
                'thread': Timer
            },
            'LA': {
                'interval': 3,
                'thread': Timer
            }
        }

    def file_scheduling(self, str_mode):
        print(self.mode_dic[str_mode])
        thread = Timer(self.mode_dic[str_mode]['interval']-0.001, self.file_scheduling, [str_mode])
        thread.start()
        self.mode_dic[str_mode]['thread'] = thread
        self.create_file(str_mode)

    def stop_file_scheduling(self, str_mode):
        self.mode_dic[str_mode]['thread'].cancel()
        print(str_mode, ' is cancel')

    def create_file(self, str_mode):
        file_name = self.create_file_name(str_mode)
        self.check_dir(file_name)
        f = open(file_name, "w+")
        f.write(str(datetime.datetime.now()))
        f.close()
        print(str_mode, ' : ', file_name)

    def create_file_name(self, str_mode):
        file_name = "C:/Users/gsd/Desktop/COMS/{:s}/GOCI/%Y/%m/%d/COMS_GOCI_{:s}_%Y%m%d%H%M%S.txt"
        file_name = datetime.datetime.strftime(datetime.datetime.now(), file_name)
        file_name = file_name.format(str_mode, str_mode)
        return file_name

    @staticmethod
    def check_dir(path):
        path = '/'.join(path.split('/')[:-1])
        if not os.path.exists(path):
            os.makedirs(path)