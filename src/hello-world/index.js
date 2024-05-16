import { registerBlockType } from '@wordpress/blocks';

registerBlockType(
	'bdm/hello-world',
	{
		edit: function() {
			return <p>Hello World</p>
		},
		save: function() {
			return <p>Hello World</p>
		}
	}
);
