#!/bin/bash
source env/bin/activate
sudo usermod -a -G dialout $USER
sudo chmod a+rw /dev/ttyACM0 
python client.py