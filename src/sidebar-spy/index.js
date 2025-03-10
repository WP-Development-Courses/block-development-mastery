import { registerBlockType } from '@wordpress/blocks';
import './style.scss';

import Edit from './edit';
import Save from './save';
import { SidebarSpyIcon } from "../icons";
import metadata from './block.json';

registerBlockType(
	metadata.name, {
	icon: {
		src: <SidebarSpyIcon />,
	},
	edit: Edit,
	save: Save,
} );
