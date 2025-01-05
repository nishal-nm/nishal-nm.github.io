# deploy.sh
npm run build &&
cd build &&
git init &&
git add . &&
git commit -m "Update React App" &&
git branch -M gh-pages &&
git remote add origin https://github.com/nishal-nm/nishal-portfolio.git &&
git push -u origin gh-pages --force &&
cd ..
