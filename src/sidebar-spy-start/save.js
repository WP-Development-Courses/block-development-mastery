import { useBlockProps } from '@wordpress/block-editor';

export default function Save() {
	return (
		<p { ...useBlockProps.save() }>
			The frontend is not used.
		</p>
	);
}
