const chainPrompt = `Information about the current repository. You can use this information when you need to calculate diffs or compare changes with the default branch:
Repository name: Anythink-Market-yhvm9civ
Owner: Wilcolab
Current branch: main
Default branch: main
`;

function toKebabCase(input) {
	if (input === null || input === undefined) {
		throw new TypeError('toKebabCase: input is null or undefined');
	}
	if (typeof input !== 'string') {
		throw new TypeError('toKebabCase: input must be a string');
	}

	const trimmed = input.trim();
	if (trimmed.length === 0) {
		throw new TypeError('toKebabCase: input must be a non-empty string');
	}

	const normalized = trimmed
		.normalize('NFKD')
		.replace(/\p{Diacritic}/gu, '')
		.toLowerCase();

	const words = normalized
		.replace(/[^a-z0-9]+/g, ' ')
		.trim()
		.split(/\s+/)
		.filter(Boolean);

	return words.join('-');
}

module.exports = { chainPrompt, toKebabCase };
