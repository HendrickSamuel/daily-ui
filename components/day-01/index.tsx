import React from 'react';
import { Box, HStack, VStack, Text } from '@chakra-ui/react';
import { PositionContainer } from './positions-container/position-container';

export const Day01: React.FC = () => {
    //Attributes

    //Functions

    //Render
    return (
        <VStack
            width="100vW"
            backgroundColor="#F3F6FF"
            height="100vH"
            justifyContent="center"
            gap="62px"
        >
            <Text
                fontWeight="900"
                fontSize="32px"
                lineHeight="40px"
                fontFamily="Merriweather"
                color="#1E2246"
            >
                Open positons
            </Text>
            <PositionContainer></PositionContainer>
            <Text
                width="845px"
                fontSize="16px"
                lineHeight="24px"
                textAlign="center"
                color="#1E2246"
            >
                We are proud to be an equal opportunity employer that values
                diversity. We do not discriminate on the basis of race,
                religion, color, national origin, gender, sexual orientation,
                age, marital status, veteran status, or disability status.
            </Text>
        </VStack>
    );
};
