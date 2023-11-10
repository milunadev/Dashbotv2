#!/bin/bash
cd /app
echo "Installing all dependencies using npm install..."
screen -ls | awk '/[0-9]+\./ {print $1}' | xargs -I {} sh -c 'screen -X -S {} quit'
npm install