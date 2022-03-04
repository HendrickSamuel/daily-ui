import { Flex } from '@chakra-ui/react';
import React from 'react';
import { PositionCard } from '../position-card/position-card';
import { PositionCardProps } from '../position-card/props';
import { BiCodeAlt, BiPaint } from 'react-icons/bi';
import { AiOutlineSetting } from 'react-icons/ai';
import { MdOutlinePeople } from 'react-icons/md';
import { BsClipboardData } from 'react-icons/bs';
import { HiAcademicCap } from 'react-icons/hi';

export const PositionContainer: React.FC = () => {
    //Attributes
    const positions: PositionCardProps[] = [
        {
            title: 'Design',
            numberOfPositions: 4,
            firstColor: '#BBCBFB',
            secondColor: '#F1D4FF',
            icon: <BiPaint size={32} />,
        },
        {
            title: 'Engineer',
            numberOfPositions: 8,
            firstColor: '#FBBBDA',
            secondColor: '#FFD4D4',
            icon: <BiCodeAlt size={32} />,
        },
        {
            title: 'Operations',
            numberOfPositions: 2,
            firstColor: '#BBEBFB',
            secondColor: '#EFD4FF',
            icon: <AiOutlineSetting size={32} />,
        },
        {
            title: 'People',
            numberOfPositions: 6,
            firstColor: '#BBFBE4',
            secondColor: '#D4E0FF',
            icon: <MdOutlinePeople size={32} />,
        },
        {
            title: 'Sales',
            numberOfPositions: 7,
            firstColor: '#BBD8FB',
            secondColor: '#FFD4D4',
            icon: <BsClipboardData size={32} />,
        },
        {
            title: 'University',
            numberOfPositions: 8,
            firstColor: '#FFDEC7',
            secondColor: '#D4D9FF',
            icon: <HiAcademicCap size={32} />,
        },
    ];

    //Functions

    //Render
    return (
        <Flex maxWidth="1054px" wrap="wrap" gap="32px">
            {positions.map((positionProps, index) => (
                <PositionCard key={`position_${index}`} {...positionProps} />
            ))}
        </Flex>
    );
};
