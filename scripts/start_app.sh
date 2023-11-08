#!/bin/bash
cd /var/app # Cambia al directorio raíz de tu proyecto
nohup npm run start:both > /dev/null 2>&1 &
