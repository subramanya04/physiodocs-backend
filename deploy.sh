#Open the linux terminal and run the following STEPS

#STEP 1:
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash

#STEP 2:
nvm -v

#STEP 3:
nvm install 14.16.0

#STEP 4:
npm install pm2 -g

#STEP 5:
sudo apt-get update 

#STEP 6:
sudo apt-get install git

#STEP 7:
git clone https://github.com/subramanya04/physiodocs-backend.git

#STEP 8:
cd physiodocs-backend

#STEP 9:
npm install

#STEP 10:
npm run build

#STEP 11:
pm2 start dist/src/main.js --name physiodocs