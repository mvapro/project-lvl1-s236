install:
	npm install

start:
	npm run babel-node -- src/bin/brain-games.js

publish:
	npm publish

lint:
	npm run eslint ".js" "/src"

startEven:
	npm run babel-node -- src/bin/brain-even.js

startCalc:
	npm run babel-node -- src/bin/brain-calc.js