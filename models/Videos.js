var keystone = require('keystone');
var	Types = keystone.Field.Types;

var Videos = new keystone.List('Videos');

Videos.add({
	videoUrl: { type: Types.Url },
	videoData: { type: Types.Embedly, from: 'videoUrl' },
});

Videos.register();