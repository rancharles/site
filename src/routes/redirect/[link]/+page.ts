import { error, redirect } from '@sveltejs/kit';
import { SITE } from '$lib/config.js';

const redirectMap: { [key: string]: string } = {
	github:     SITE.social.github,
	youtube:    SITE.social.youtube,
	instagram:  SITE.social.instagram,
	discord:    SITE.social.discord.url,
	steam:      SITE.social.steam,
	email:      `mailto:${SITE.owner.email}`,
	shadertoy:  SITE.social.shadertoy,
	codeforces: SITE.social.codeforces,
	dmoj:       SITE.social.dmoj,
	linkedin:   SITE.social.linkedin,
	gallery:    SITE.social.gallery,
	resume:     SITE.redirects.resume,
};

export function load({ params }) {
	if (params?.link in redirectMap) {
		redirect(308, redirectMap[params.link as string]);
	}

	error(404, 'Redirect Not Found');
}
