import React from 'react';
import { Story, Meta } from '@storybook/react';
import { PositionContainer } from './position-container';
import { Flex } from '@chakra-ui/react';

export default {
    component: PositionContainer,
    title: 'Components/Day01/PositionContainer',
} as Meta;

//👇 We create a “template” of how args map to rendering

const Template: Story = () => {
    return (
        <Flex
            backgroundColor="#F3F6FF"
            justifyContent="center"
            alignItems="center"
            h="100vh"
        >
            <PositionContainer />
        </Flex>
    );
};

// Default scenario
export const Default = Template.bind({});
Default.args = {};
