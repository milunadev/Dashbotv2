#!/bin/bash
screen -dmS myapp bash -c 'cd /var/app && PORT=8080 npm run start:both'

