import { Box, Button, Flex, HStack, VStack, Text } from '@chakra-ui/react';
import React from 'react';
import { PositionCardProps } from './props';

export const PositionCard: React.FC<PositionCardProps> = ({
    title,
    firstColor = '#BBCBFB',
    secondColor = '#F1D5FF',
    numberOfPositions,
    icon,
}) => {
    //Attributes

    //Functions

    //Render
    return (
        <VStack
            justifyContent="space-between"
            width="330px"
            height="251px"
            backgroundColor="#fff"
            borderRadius="16px"
            boxShadow="0px 24px 44px rgba(180, 191, 225, 0.4);"
            paddingX="40px"
            paddingY="48px"
        >
            <HStack gap="16px">
                <Flex
                    justifyContent="center"
                    alignItems="center"
                    width="48px"
                    height="48px"
                    background={`linear-gradient(131.94deg, ${firstColor} 5.22%, ${secondColor} 100.41%);`}
                    borderRadius="14px"
                >
                    {icon}
                </Flex>
                <Text
                    color="#1E2246"
                    fontWeight="500"
                    fontSize="24px"
                    lineHeight="36px"
                >
                    {title}
                </Text>
            </HStack>
            <Button
                margin="0 !important"
                paddingX="24px"
                paddingY="16px"
                border="1px solid #C2C5E2"
                borderRadius="8px"
                height="59px"
                width="250px"
                backgroundColor="#ffffff"
                _hover={{
                    backgroundColor: '#1E2246',
                    color: '#FFFFFF',
                }}
            >
                <Text fontWeight="500" fontSize="18px" lineHeight="27px">
                    {numberOfPositions} open positions
                </Text>
            </Button>
        </VStack>
    );
};
