import { registerBlockType } from '@wordpress/blocks';
import { TextControl, TextareaControl } from '@wordpress/components';

registerBlockType('sph-media/related-page-item', {
    title: 'Related Page Item',
    parent: ['sph-media/related-pages'],
    attributes: {
        pageTitle: {
            type: 'string',
            source: 'html',
            selector: '.page-title',
        },
        pageDescription: {
            type: 'string',
            source: 'html',
            selector: '.page-description',
        },
        pageLink: {
            type: 'string',
            source: 'attribute',
            selector: 'a',
            attribute: 'href',
        },
    },
    edit: function (props) {
        const { attributes, setAttributes } = props;

        const onChangeTitle = (newTitle) => {
            setAttributes({ pageTitle: newTitle });
        };

        const onChangeDescription = (newDescription) => {
            setAttributes({ pageDescription: newDescription });
        };

        const onChangeLink = (newLink) => {
            setAttributes({ pageLink: newLink });
        };

        return (
            <div className="related-page-item">
                <TextControl
                    type="text"
                    placeholder="Page Title"
                    value={attributes.pageTitle}
                    onChange={(value) => onChangeTitle(value)}
                />
                <TextareaControl
                    placeholder="Page Description"
                    value={attributes.pageDescription}
                    onChange={(value) => onChangeDescription(value)}
                />
                <TextControl
                    type="text"
                    placeholder="Page Link"
                    value={attributes.pageLink}
                    onChange={(value) => onChangeLink(value)}
                />
            </div>
        );
    },
    save: function (props) {
        return (
            <div className="related-page-item">
                <a href={props.attributes.pageLink} className="page-title">
                    {props.attributes.pageTitle}
                </a>
                <div className="page-description">
                    {props.attributes.pageDescription}
                </div>
            </div>
        );
    },
});
