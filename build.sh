NODE_VERSION=$(node -pe "require('./package.json').engines.node")

# Install Node.js using nvm (Node Version Manager)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
source ~/.nvm/nvm.sh
nvm install $NODE_VERSION

# Install dependencies and build your application
npm install
npm start
