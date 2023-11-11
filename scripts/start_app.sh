#!/bin/bash
# cd /var/app
# pm2 delete dashbot
# pm2 start npm --name "dashbot" -- run start:both
# pm2 startup
# pm2 save
# pm2 restart dashbot



#USANDO NGINGX
cp -r /var/app/build /var/www/html
cat << 'EOF' | sudo tee /etc/nginx/nginx.conf
user www-data;
worker_processes auto;
pid /run/nginx.pid;
include /etc/nginx/modules-enabled/*.conf;

events {
        worker_connections 768;
        # multi_accept on;
}

http {
        server{
          listen 8080;
          root /var/www/html/build;
        }
}
EOF
systemctl restart nginx