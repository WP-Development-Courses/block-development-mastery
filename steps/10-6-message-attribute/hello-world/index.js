import { RichText, useBlockProps } from '@wordpress/block-editor';
import { registerBlockType } from '@wordpress/blocks';
import { HelloWorldIcon } from '../icons';

registerBlockType(
	'bdm/hello-world',
	{
		icon: HelloWorldIcon,
		edit: function( { attributes, setAttributes } ) {
			return <RichText
				{ ...useBlockProps() }
				value={ attributes.message }
				onChange={ ( value ) => {
					setAttributes( { message: value } );
				} }
			/>
		},
		save: function( { attributes } ) {
			return <p { ...useBlockProps.save() }>
				<RichText.Content value={ attributes.message } />
			</p>
		}
	}
);
