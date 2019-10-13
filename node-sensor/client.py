import serial
import time
import socketio

# standard Python
sio = socketio.Client()
sio.connect('https://calm-river-07231.herokuapp.com/')
print('my sid is', sio.sid)
ser = serial.Serial('/dev/ttyACM0', 9600)

while True:
    if (ser.in_waiting > 0):
        line = ser.readline()
        print(line)
        sio.emit('sensor', line)
