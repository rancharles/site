import { SITE } from '$lib/config.js';

const rss = {
	title: `${SITE.owner.firstName}'s Blog`,
	description: 'A collection of pseudorandom thoughts.',
	url: `${SITE.url}/blog`,
};

export async function GET({ fetch }) {
	const response = await fetch('../../api/posts');
	const posts: Blog.Post[] = await response.json();

	const headers = { 'Content-Type': 'application/xml' };

	const xml = `
		<rss xmlns:atom="http://www.w3.org/2005/Atom" version="2.0">
			<channel>
				<title>${rss.title}</title>
				<description>${rss.description}</description>
				<link>${rss.url}</link>
				<atom:link href="${rss.url}/rss.xml" rel="self" type="application/rss+xml"/>
				${posts
					.map(
						(post) => `
						<item>
							<title>${post.title}</title>
							<description>${post.description}</description>
							<link>${rss.url}/${post.slug}</link>
							<guid isPermaLink="true">${rss.url}/${post.slug}</guid>
							<pubDate>${new Date(post.date).toUTCString()}</pubDate>
						</item>
					`
					)
					.join('')}
			</channel>
		</rss>
	`.trim();

	return new Response(xml, { headers });
}

export const prerender = false;
