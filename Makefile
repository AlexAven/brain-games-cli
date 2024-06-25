install: # perfoming a clean intallation of dependencies
	npm ci

brain-games: # running the brain-game without a global installation
	node bin/brain-games.js

brain-even: # running the even-game without a global installation
	node bin/brain-even.js

brain-calc: # running the calculation-game without a global installation
	node bin/brain-calc.js

brain-gcd: # running the GDC-game without a global installation
	node bin/brain-gcd.js

brain-progression: # running the progression-game without a global installation
	node bin/brain-progression.js

brain-prime: # running the prime-game without a global installation
	node bin/brain-prime.js

publish: # publishing package to NPM in a test-mode
	npm publish --dry-run

lint: # making a eslint code-check according Airbnb Style Guide
	npx eslint . 
