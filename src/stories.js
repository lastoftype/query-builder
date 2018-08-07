import React from 'react';
import { storiesOf } from '@storybook/react';
import { Theme } from '@timberio/ui';

import javascript from 'react-syntax-highlighter/languages/prism/javascript';
import { registerPrism } from './utils';
import QueryBuilder from './';

// Register the necessary languages for this example
registerPrism('javascript', javascript);

storiesOf('QueryBuilder', module).add('Defaults', () => {
    return (
        <Theme>
            <QueryBuilder schema={exampleSchema} />
        </Theme>
    );
});

/**
 * [{
 *     label,
 *     path,
 *     message?,
 *     subfields: [{
 *         label,
 *         path,
 *         type,
 *         description?,
 *         placeholder?,
 *     }]
 * }]
 *
 *     panel
 *         item
 */
const exampleSchema = [
    {
        label: 'User',
        path: 'user',
        subfields: [
            {
                label: 'User ID',
                path: 'id',
                type: 'string',
                description: "The user's numerical ID.",
                placeholder: 'e.g. 123456',
            },
            {
                label: 'User email',
                path: 'email',
                type: 'string',
                description: "The user's email address.",
                placeholder: 'e.g. john@doe.com',
            },
            {
                label: 'User name',
                path: 'name',
                type: 'string',
                description: "The user's preferred reference name.",
                placeholder: 'e.g. John',
            },
        ],
    },
    {
        label: 'Runtime',
        path: 'runtime',
        message:
            '*Hey, we noticed you have no runtime context.*\n\nTo get it click below to install the Timber ruby package\n\n[https://github.com/timberio/ruby](https://github.com/timberio/ruby)',
        subfields: [],
    },
];
