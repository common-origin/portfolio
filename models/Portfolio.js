var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Portfolio Model
 * ==========
 */

var Portfolio = new keystone.List('Portfolio', {
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true },
	defaultSort: '-createdAt'
});

Portfolio.add({
	title: { type: String, required: true },
	state: { type: Types.Select, options: 'draft, published, archived', default: 'draft', index: true },
	author: { type: Types.Relationship, ref: 'User', index: true },
	publishedDate: { type: Types.Date, index: true, dependsOn: { state: 'published' } },
	image: { type: Types.CloudinaryImage },
	content: {
		brief: { type: Types.Html, wysiwyg: true, height: 150 },
		extended: { type: Types.Html, wysiwyg: true, height: 400 },
		text: {type: Types.Textarea, height:200 }
	},
	categories: { type: Types.Relationship, ref: 'ProjectCategory', many: true },
});

Portfolio.schema.virtual('content.full').get(function () {
	return this.content.extended || this.content.brief;
});

Portfolio.defaultColumns = 'title, state|20%, author|20%, publishedDate|20%';
Portfolio.register();
