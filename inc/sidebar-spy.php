<?php

function bdm_register_sidebar_spy_block() {
	register_block_type( BDM_ROOT_DIR . '/build/sidebar-spy/' );
	register_block_type( BDM_ROOT_DIR . '/build/sidebar-spy-start/' );
}
add_action( 'init', 'bdm_register_sidebar_spy_block' );
