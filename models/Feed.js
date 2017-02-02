var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Feed Model
 * =============
 */

var Feed = new keystone.List('Feed', {
	map: { name: 'title' },
	autokey: { from: 'title', path: 'slug', unique: true },
});

Feed.add({
	title: { type: String, required: true },
	publishedDate: { type: Date, default: Date.now },
	images: { type: Types.CloudinaryImages },
	url:{
        type: Types.Url,
        format: function(url){
            return '<img src="'+url+'" style="max-width: 300px">'
        }
    },
    content: {
		brief: { type: Types.Html, wysiwyg: true, height: 150 },
		extended: { type: Types.Html, wysiwyg: true, height: 400 },
	},
});

Feed.schema.virtual('content.full').get(function () {
	return this.content.extended || this.content.brief;
});

Feed.register();
