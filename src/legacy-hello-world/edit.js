import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function Edit( { attributes, setAttributes } ) {
	return (
		<div {...useBlockProps()}>
			<p className="wp-block-bdm-legacy-hello-world__title">Hello World</p>
			<RichText
				className="wp-block-bdm-legacy-hello-world__message"
				onChange={
					function( message ) {
						setAttributes( { message } );
					}
				}
				tagName="p"
				value={ attributes.message }
			/>
		</div>
	);
}
