install: # perfoming a clean intallation of dependencies
	npm ci

brain-games: # running the brain-game without a global installation
	node bin/brain-games.js

brain-even: # running the even-game without a global installation
	node bin/brain-even.js

publish: # publishing package to NPM in a test-mode
	npm publish --dry-run

lint: # making a eslint code-check according Airbnb Style Guide
	npx eslint . 
