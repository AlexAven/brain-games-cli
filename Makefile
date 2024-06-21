install: # perfoming a clean intall of dependencies
	npm ci

brain-games: # running the game without a global installation
	node bin/brain-games.js

publish: # publishing package to NPM in a test-mode
	npm publish --dry-run
