import { addDecorator } from '@storybook/react';
import { ChakraProvider } from '@chakra-ui/react';

addDecorator((StoryFn) => (
    <ChakraProvider resetCSS>
        <StoryFn />
    </ChakraProvider>
));

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};
