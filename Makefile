# Makefile

install: # install dependencies
	npm install
	npm install readline-sync
	npm install --save-dev eslint
#	npx eslint --init

brain-games: #start game
	node bin/brain-games.js

publish: #...
	npm publish --dry-run

lint: #lint project
	npx eslint .
