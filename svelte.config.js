import adapter from '@sveltejs/adapter-auto';
import { mdsvex, escapeSvelte } from 'mdsvex';
import { createHighlighter } from 'shiki';
import rehypeKatexSvelte from 'rehype-katex-svelte';
import remarkMath from 'remark-math';
import customBlockquotes from './customMarkdown.js';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

let highlighterInstance = null;

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md', '.svx'],
	preprocess: [
		mdsvex({
			layout: path.resolve(__dirname, 'src/routes/blog/mdsvex/mdsvex.svelte'),
			extensions: ['.md', '.svx'],
			remarkPlugins: [
				remarkMath,
				customBlockquotes
			],
			rehypePlugins: [
				[rehypeKatexSvelte, {
					macros: {
						"\\ceil": "\\left\\lceil #1 \\right\\rceil",
						"\\floor": "\\left\\lfloor #1 \\right\\rfloor",
						"\\nullspace": "\\operatorname{null}",
						"\\vspan": "\\operatorname{span}",
						"\\range": "\\operatorname{range}",
						"\\rank": "\\operatorname{rank}",
						"\\abs": "\\left\\lvert #1 \\right\\rvert",
						"\\norm": "\\left\\lVert #1 \\right\\rVert",
						"\\paren": "\\left( #1 \\right)",
						"\\sign": "\\operatorname{sgn}",
						"\\bigO": "\\mathcal{O}"
					}
				}]
			],
			highlight: {
				highlighter: async (code, lang = 'text') => {
					if (!highlighterInstance) {
						highlighterInstance = await createHighlighter({
							themes: ['github-dark'],
							langs: ['c', 'cpp', 'glsl', 'julia', 'python', 'html', 'javascript', 'typescript', 'text']
						});
					}
					const safeLang = highlighterInstance.getLoadedLanguages().includes(lang) ? lang : 'text';
					const html = escapeSvelte(highlighterInstance.codeToHtml(code, { lang: safeLang, theme: 'github-dark' }));
					return `{@html \`${html}\` }`;
				}
			}
		})
	],

	kit: {
		adapter: adapter(),
		prerender: {
			handleHttpError: ({ path, referrer, message }) => {
				const redirects = [
					'/redirect/github',
					'/redirect/youtube',
					'/redirect/instagram',
					'/redirect/discord',
					'/redirect/steam',
					'/redirect/email',
					'/redirect/shadertoy',
				];

				if (redirects.includes(path)) {
					return;
				}

				throw new Error(message);
			}
		}
	}
};

export default config;
