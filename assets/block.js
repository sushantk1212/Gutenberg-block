import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks } from '@wordpress/block-editor';

registerBlockType('sph-media/related-pages', {
    title: 'Related Pages',
    icon: 'book-alt',
    category: 'sph-media',
    attributes: {
        pages: {
            type: 'array',
            default: [],
            selector: '.related-pages-parent',
        },
    },
    edit: function () {
        return (
            <InnerBlocks
                allowedBlocks={['sph-media/related-page-item']}
                templateLock={false}
            />
        );
    },
    save: function () {
        return <InnerBlocks.Content />;
    },
});
