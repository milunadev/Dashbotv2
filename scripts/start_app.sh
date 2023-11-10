#!/bin/bash
cd /var/app
pm2 delete dashbot
pm2 start npm --name "dashbot" -- run start:both
pm2 startup
pm2 save
pm2 restart dashbot
