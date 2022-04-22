# Makefile

install: # install dependencies
	npm install

brain-games: #start game
	node bin/brain-games.js

publish: #...
	npm publish --dry-run
