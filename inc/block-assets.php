<?php

function bdm_register_block_assets_block() {
	register_block_type( BDM_ROOT_DIR . '/build/block-assets/' );
}
add_action( 'init', 'bdm_register_block_assets_block' );
