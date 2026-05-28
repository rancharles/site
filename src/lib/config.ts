/**
 * Site-wide configuration.
 * Update these values when owner info, URLs, or social handles change —
 * they propagate automatically to metadata, footers, and redirects.
 */

export const SITE = {
	/** Canonical public URL (no trailing slash) */
	url: 'https://polarity.sh',

	/** Short display name used in <title>, og:site_name, navbar, etc. */
	name: 'Charles Ran',

	/** Default og:description for pages that don't override it */
	description: "Charles's personal website",

	owner: {
		name: 'Charles Ran',
		firstName: 'Charles',
		email: 'charles.ran9@gmail.com',
	},

	social: {
		github:     'https://github.com/rancharles',
		youtube:    'https://www.youtube.com/channel/UClZN6f71XImxoznqJ4jPknw',
		instagram:  'https://www.instagram.com/rancharles/',
		linkedin:   'https://www.linkedin.com/in/charlesran/',
		steam:      'https://steamcommunity.com/id/cranberry128/',
		shadertoy:  'https://www.shadertoy.com/user/IAmLegend',
		codeforces: 'https://codeforces.com/profile/cran',
		dmoj:       'https://dmoj.ca/user/polarity',
		gallery:    'https://gallery.charlesran.com',

		discord: {
			/** Deep-link URL used for the /redirect/discord route */
			url:      'discord://-/users/365886855469727745',
			/** Handle shown in tooltips and copied to clipboard */
			username: 'charlesran',
		},
	},

	/** Non-social redirect targets */
	redirects: {
		resume: '/resume.pdf',
	},
} as const;
