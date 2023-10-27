sudo apt-get update
sudo apt-get install -y curl

# Téléchargement et exécution du script d'installation de NodeSource pour LTS
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs
node -v
npm install
npm start
