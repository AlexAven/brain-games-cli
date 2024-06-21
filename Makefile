install: # perfoming a clean intallation of dependencies
	npm ci

brain-games: # running the game without a global installation
	node bin/brain-games.js

publish: # publishing package to NPM in a test-mode
	npm publish --dry-run

lint: # making a eslint code-check according Airbnb Style Guide
	npx eslint . 
