import { error } from '@sveltejs/kit';
import { api } from './api';

export const load = async ({ locals }) => {
	const response = await api('GET', `todos/${locals.userid}`);

	if (response.status === 404) {
		return {
			todos: []
		};
	}

	if (response.status === 200) {
		return {
			todos: await response.json()
		};
	}

	throw error(response.status);
};

export const actions = {
	add: async ({ request, locals }) => {
		const form = await request.formData();

		await api('POST', `todos/${locals.userid}`, {
			text: form.get('text')
		});
	},
	edit: async ({ request, locals }) => {
		const form = await request.formData();

		await api('PATCH', `todos/${locals.userid}/${form.get('uid')}`, {
			text: form.get('text')
		});
	},
	toggle: async ({ request, locals }) => {
		const form = await request.formData();

		await api('PATCH', `todos/${locals.userid}/${form.get('uid')}`, {
			done: !!form.get('done')
		});
	},
	delete: async ({ request, locals }) => {
		const form = await request.formData();

		await api('DELETE', `todos/${locals.userid}/${form.get('uid')}`);
	}
};
