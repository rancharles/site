import visit from 'unist-util-visit';

const blockquoteTypes = {
	'EDIT:': 'edit-blockquote',
	// 'NOTE:': 'note-blockquote'
};

function customBlockquotes() {
	return (tree) => {
		let lastEdit = -1;
		visit(tree, 'text', (node, i, parent) => {
			// Don't wrap text inside links — breaks link rendering
			if (parent?.type === 'link' || parent?.type === 'linkReference') return;

			const type = Object.keys(blockquoteTypes).find(
				(key) => node.value.startsWith(key) || node.position.start.line === lastEdit
			);
			if (!type) return;

			const cls = blockquoteTypes[type];
			const raw = node.value;

			// Must be 'html' so remark-rehype passes the value as raw HTML
			// rather than escaping the angle brackets into &lt;span&gt; etc.
			node.type = 'html';

			if (raw.startsWith(type)) {
				// First node: "EDIT: rest of text..."
				// Trailing space must go INSIDE the span — anything after the last </span>
				// is silently dropped by the mdsvex/remark-rehype pipeline.
				// Use &nbsp; (U+00A0) so it isn't collapsed by CSS white-space:normal.
				const rest = raw.slice(type.length);
				const restTrimmed = rest.trimEnd();
				const hasTrailing = rest.length > restTrimmed.length;
				// The leading space of restTrimmed is stripped by the remark→Svelte pipeline,
			// so move it inside the <strong> as &nbsp; (U+00A0) which survives HTML parsing.
			node.value = `<strong class="${cls}-label">${type}&nbsp;</strong><span class="${cls}">${restTrimmed.trimStart()}${hasTrailing ? '&nbsp;' : ''}</span>`;
			} else {
				// Continuation nodes: " which has..." or "...before math "
				// Leading/trailing spaces must also live inside the span for the same reason.
				const trimmed = raw.trim();
				const hasLeading = raw.length > raw.trimStart().length;
				const hasTrailing = raw.length > raw.trimEnd().length;
				node.value = `<span class="${cls}">${hasLeading ? '&nbsp;' : ''}${trimmed}${hasTrailing ? '&nbsp;' : ''}</span>`;
			}

			lastEdit = node.position.start.line;
		});
	};
}

export default customBlockquotes;
