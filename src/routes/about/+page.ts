import { redirect } from '@sveltejs/kit';

// About page merged into home — redirect permanently
export function load() {
	redirect(301, '/');
}
