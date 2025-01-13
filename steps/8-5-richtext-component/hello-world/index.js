import { RichText, useBlockProps } from '@wordpress/block-editor';
import { registerBlockType } from '@wordpress/blocks';
import { HelloWorldIcon } from '../icons';

registerBlockType(
	'bdm/hello-world',
	{
		icon: HelloWorldIcon,
		edit: function() {
			return <RichText
				{ ...useBlockProps() }
				onChange={ () => {} }
			/>
		},
		save: function() {
			return <p { ...useBlockProps.save() }>Hello World</p>
		}
	}
);
