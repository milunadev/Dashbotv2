#!/bin/bash
cd /app
screen -dmS myapp bash -c 'npm run start:both'
sudo screen -ls > /home/ubuntu/output.txt