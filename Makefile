# Makefile

install: # install dependencies
	npm install
	npm install readline-sync
	npm install --save-dev eslint
#	npx eslint --init

brain-games: #start game
	node bin/brain-games.js

brain-even: #start game
	node bin/brain-even.js

brain-calc: #start game
	node bin/brain-calc.js

publish: #...
	npm publish --dry-run

lint: #lint project
	npx eslint .
