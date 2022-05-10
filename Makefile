# Makefile

install: # install dependencies
	npm install

brain-games: #start game
	node bin/brain-games.js

brain-even: #start game
	node bin/brain-even.js

brain-calc: #start game
	node bin/brain-calc.js

brain-gcd: #start game
	node bin/brain-gcd.js

brain-progression: #start game
	node bin/brain-progression

brain-prime: #start game
	node bin/brain-prime

publish: #...
	npm publish --dry-run

lint: #lint project
	npx eslint .
