git pull
npm run build --prod
rm -rf ./bin
mkdir -p bin
cp ./deploy_util/server.js ./bin/
cp -r ./www/* ./bin/
cd ./bin/
npm install connect serve-static
