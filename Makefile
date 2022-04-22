# Makefile

install: # install dependencies
	npm install
	npm install readline-sync

brain-games: #start game
	node bin/brain-games.js

publish: #...
	npm publish --dry-run
