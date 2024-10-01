<?php

function bdm_register_hello_world_block() {
	register_block_type( BDM_ROOT_DIR . '/build/hello-world/' );
}
add_action( 'init', 'bdm_register_hello_world_block' );
