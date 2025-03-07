import { useBlockProps } from '@wordpress/block-editor';
import { registerBlockType } from '@wordpress/blocks';
import { BlockAssetsIcon } from '../icons';

import './style.scss';
import './editor.scss';

registerBlockType(
	'bdm/block-assets',
	{
		icon: BlockAssetsIcon,
		edit: function() { return <div { ...useBlockProps() }>Block Assets</div> },
		save: function() { return <div { ...useBlockProps.save() }>Block Assets</div> },
	}
);
