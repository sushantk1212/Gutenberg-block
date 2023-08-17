<?php
/*
Plugin Name: Add section Block
Description: Gutenberg custom block for adding section.
Version: 1.0
Author: Sushant Khadilkar
License: GPL2
*/

defined('ABSPATH') || exit;

// Enqueue block assets
add_action('enqueue_block_assets', 'related_pages_block_enqueue_assets');

function related_pages_block_enqueue_assets() {
    if ( ! is_admin() ) {
        wp_enqueue_style(
            'related-pages-block-style',
            plugin_dir_url(__FILE__) . 'style.css',
            array('wp-edit-blocks')
        );
   } else {
        wp_enqueue_style(
            'related-pages-block-style',
            plugin_dir_url(__FILE__) . 'assets/style.css',
            array('wp-edit-blocks')
        );
   }
}

// Register the block category
add_filter('block_categories', 'related_pages_block_category', 10, 2);

function related_pages_block_category($categories, $post) {
    return array_merge(
        $categories,
        array(
            array(
                'slug' => 'sph-media',
                'title' => __('SPH Media', 'related-pages-block'),
            ),
        )
    );
}

// Register the block
add_action('init', 'related_pages_block_register');

function related_pages_block_register() {
    register_block_type('sph-media/related-pages', array(
        'attributes' => array(
            'pages' => array(
                'type' => 'array',
                'default' => array(),
            ),
        ),
        'editor_script' => 'related-pages-block-editor-script',
        'render_callback' => 'related_pages_block_render',
    ));
}

// Enqueue block editor assets
add_action('enqueue_block_editor_assets', 'related_pages_block_editor_assets');

function related_pages_block_editor_assets() {
    wp_enqueue_script(
        'related-pages-block-editor-script',
        plugin_dir_url(__FILE__) . 'assets/block.js',
        array('wp-blocks', 'wp-element', 'wp-components', 'wp-editor')
    );
}

// Enqueue block editor assets
add_action('enqueue_block_editor_assets', 'related_pages_item_block_editor_assets');

function related_pages_item_block_editor_assets() {
    wp_enqueue_script(
        'related-pages-item-block-editor-script',
        plugin_dir_url(__FILE__) . 'blocks/add-section.js',
        array('wp-blocks', 'wp-element', 'wp-components', 'wp-editor')
    );
}