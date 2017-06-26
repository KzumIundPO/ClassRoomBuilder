git pull
npm run build --prod
mkdir -p bin
cp ./deploy_util/server.js ./bin/
cp -r ./www/* ./bin/
cd ./bin/
npm install connect serve-static
