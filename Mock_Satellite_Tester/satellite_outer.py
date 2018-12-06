import datetime
from threading import Timer


class SatelliteOuter(object):

    def __init__(self):
        self.FD = 10
        self.LA = 3
        self.file_scheduling(self.LA)
        self.file_scheduling(self.FD)

    def file_scheduling(self, mode):
        thread = Timer(mode-0.001, self.file_scheduling, [mode])
        thread.start()
        self.create_file(mode)

    def create_file(self, mode):
        if mode == self.LA :
            print("LA : ", datetime.datetime.now())
        else:
            print("FD : ", datetime.datetime.now())


s = SatelliteOuter()