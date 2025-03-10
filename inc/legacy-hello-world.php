<?php

function bdm_register_legacy_hello_world_block() {
	register_block_type( BDM_ROOT_DIR . '/build/legacy-hello-world/' );
	register_block_type( BDM_ROOT_DIR . '/build/legacy-hello-world-start/' );
}
add_action( 'init', 'bdm_register_legacy_hello_world_block' );
