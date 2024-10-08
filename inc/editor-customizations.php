<?php

function bdm_register_block_category( $block_categories ) {
 	return array_merge(
		[
			[
				'slug'  => 'block-development-mastery',
				'title' => 'Block Development Mastery',
			]
			],
			$block_categories
	);
}
add_filter( 'block_categories_all', 'bdm_register_block_category' );