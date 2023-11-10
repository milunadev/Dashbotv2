#!/bin/bash
cd /var/app
echo "Installing all dependencies using npm install..."
npm install
npm install pm2 -g
