import React from 'react';
import { Story, Meta } from '@storybook/react';
import { PositionCard } from './position-card';
import { Flex } from '@chakra-ui/react';
import { PositionCardProps } from './props';

export default {
    component: PositionCard,
    title: 'Components/Day01/PositionCard',
} as Meta;

//👇 We create a “template” of how args map to rendering

const Template: Story<PositionCardProps> = (args) => {
    return (
        <Flex
            backgroundColor="#F3F6FF"
            justifyContent="center"
            alignItems="center"
            h="100vh"
        >
            <PositionCard {...args} />
        </Flex>
    );
};

// Default scenario
export const Default = Template.bind({});
Default.args = {
    title: 'Design',
    numberOfPositions: 1,
    firstColor: '#BBCBFB',
    secondColor: '#F1D4FF',
} as PositionCardProps;
