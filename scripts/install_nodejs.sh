#!/bin/bash
CURRENT_NODE_VERSION=$(node -v)

if [[ "$CURRENT_NODE_VERSION" == *"v18."* ]]; then
  echo "Node.js v18.x.x is already installed"
else
  # Node.js no está instalado o no es la versión 18.x.x, realiza la instalación
  apt-get update
  apt install curl -y
  apt-get install -y ca-certificates curl gnupg
  mkdir -p /etc/apt/keyrings
  curl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key | sudo gpg --dearmor -o /etc/apt/keyrings/nodesource.gpg
  NODE_MAJOR=18
  echo "deb [signed-by=/etc/apt/keyrings/nodesource.gpg] https://deb.nodesource.com/node_$NODE_MAJOR.x nodistro main" | sudo tee /etc/apt/sources.list.d/nodesource.list
  apt-get update
  apt-get install nodejs -y
fi
