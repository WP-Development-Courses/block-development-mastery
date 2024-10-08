import { registerBlockType } from '@wordpress/blocks';
import { HelloWorldIcon } from '../icons';

registerBlockType(
	'bdm/hello-world',
	{
		icon: HelloWorldIcon,
		edit: function() {
			return <p>Hello World</p>
		},
		save: function() {
			return <p>Hello World</p>
		}
	}
);
