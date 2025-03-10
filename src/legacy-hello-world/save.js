import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function Save( { attributes } ) {
	return (
		<div {...useBlockProps.save()}>
			<p className="wp-block-bdm-legacy-hello-world__title">Hello World</p>
			<RichText.Content
				className="wp-block-bdm-legacy-hello-world__message"
				tagName="p"
				value={ attributes.message }
			/>
		</div>
	);
}
