install: 

	npm ci

brain-games:
       	
	node bin/brain-games.js

brain-even:

	node bin/brainEvenLaunch.js

brain-calc:

	node bin/brainCalcLaunch.js

publish:
      
	npm publish --dry-run

lint:

	npx eslint .