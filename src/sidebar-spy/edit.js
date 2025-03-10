import { useBlockProps } from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';

export default function Edit() {
	const isEditorSidebarOpened = useSelect( select => {
		return select( 'core/edit-post' ).isEditorSidebarOpened();
	} );

	return (
		<div { ...useBlockProps() }>
			{
				isEditorSidebarOpened
				? <p>The sidebar is: <strong>displayed</strong>.</p>
				: <p>The sidebar is: <strong>hidden</strong>.</p>
			}
		</div>
	);
}
