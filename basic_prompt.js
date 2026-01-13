const basicPrompt = `Information about the current repository. You can use this information when you need to calculate diffs or compare changes with the default branch:
Repository name: Anythink-Market-yhvm9civ
Owner: Wilcolab
Current branch: main
Default branch: main
`;

function toCamelCase(input) {
	if (input === null || input === undefined) return '';
	const str = String(input);
	const words = str
		.normalize('NFKD')
		.replace(/[\u0000-\u001F\u007F-\u009F]/g, '')
		.replace(/\p{Diacritic}/gu, '')
		.split(/[^A-Za-z0-9]+/u)
		.filter(Boolean);
	if (!words.length) return '';
	return words
		.map((w, i) => {
			const lower = w.toLowerCase();
			if (i === 0) return lower;
			return lower.charAt(0).toUpperCase() + lower.slice(1);
		})
		.join('');
}

module.exports = { basicPrompt, toCamelCase };
