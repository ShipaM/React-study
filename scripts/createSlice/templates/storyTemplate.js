module.exports = (layer, componentName) => `import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { ${componentName} } from './${componentName}';

const meta: Meta<typeof ${componentName}> =  {
    title: '${layer}/${componentName}',
    component: ${componentName},
    parameters: {
        layout: "centered", // Centers the component in Storybook
    },
    tags: ["autodocs"],
    argTypes: {
    },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {

    },
};`;
