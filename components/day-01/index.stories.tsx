import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Day01 } from '.';

export default {
    component: Day01,
    title: 'Components/Day01',
} as Meta;

//👇 We create a “template” of how args map to rendering

const Template: Story = () => <Day01 />;

// Default scenario
export const Default = Template.bind({});
Default.args = {};
