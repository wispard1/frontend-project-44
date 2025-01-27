install : # первая команда
	npm ci
brain-games : # вторая команда
	node bin/brain-games.js
publish : # третья
	npm publish --dry-run
lint : # четвертая
	npx eslint
