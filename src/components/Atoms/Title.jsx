import { Box, Divider, Heading } from '@chakra-ui/react';

const TitleHeading = ({ title }) => {
    return (
        <Box
            p={6}
        >
            <Heading
                display="block"
                size="lg"
                p={2}
            >
                {title}
            </Heading>
            <Divider />
        </Box>
    )
}

export default TitleHeading;