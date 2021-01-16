import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import {
    Box,
    Button,
    Flex,
    Img,
    Heading,
    Stack,
    Text,
    Skeleton,
} from "@chakra-ui/react";
import useBanner from "./hooks/useBanner";

export default function Banner({
    title,
    subtitle,
    image,
    ctaLink,
    ctaText,
    ...rest
}) {

    const { handleLoaded, showSkeleton } = useBanner();

    console.log(showSkeleton, 'banner');

    return (
        <Box
            p={6}
            direction={"row"}
        >
            <Flex
                align="center"
                justify={{ base: "center", md: "space-around", xl: "space-between" }}
                direction={{ base: "column-reverse", md: "row" }}
                wrap="no-wrap"
                maxH="80vh"
                px={8}
                mb={16}
                {...rest}
            >
                <Stack
                    spacing={4}
                    w={{ base: "80%", md: "40%" }}
                    align={["center", "center", "flex-start", "flex-start"]}
                >
                    <Skeleton isLoaded={showSkeleton}>
                        <Heading
                            as="h1"
                            size="xl"
                            fontWeight="bold"
                            color="primary.800"
                            textAlign={["center", "center", "left", "left"]}
                        >
                            {title}
                        </Heading>
                    </Skeleton>
                    <Skeleton isLoaded={showSkeleton}>
                        <Heading
                            as="h2"
                            size="md"
                            color="primary.800"
                            opacity="0.8"
                            fontWeight="normal"
                            lineHeight={1.5}
                            textAlign={["center", "center", "left", "left"]}
                        >
                            {subtitle}
                        </Heading>
                    </Skeleton>
                    <Skeleton isLoaded={showSkeleton}>
                        <Link href={ctaLink}>
                            <Button
                                colorScheme="primary"
                                borderRadius="8px"
                                py="4"
                                px="4"
                                lineHeight="1"
                                size="md"
                            >
                                {ctaText}
                            </Button>
                        </Link>
                    </Skeleton>
                </Stack>
                <Box w={{ base: "80%", sm: "60%", md: "50%" }} mb={{ base: 12, md: 0 }} borderRadius="3xl">
                    <Skeleton isLoaded={showSkeleton}>
                        {/* TODO: Make this change every X secs */}
                        {/* <Img src={"/photo.jpg"} onLoad={handleLoaded} size="100%" rounded="1rem" shadow="2xl" /> */}
                        <Img src={image} onLoad={handleLoaded} size="100%" rounded="1rem" shadow="2xl" />
                    </Skeleton>
                </Box>
            </Flex>
        </Box>
    );
}

Banner.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    image: PropTypes.string,
    ctaText: PropTypes.string,
    ctaLink: PropTypes.string
};

Banner.defaultProps = {
    title: "React landing page with Chakra UI",
    subtitle:
        "This is the subheader section where you describe the basic benefits of your product",
    image: "https://source.unsplash.com/collection/404339/800x600",
    ctaText: "Create your account now",
    ctaLink: "/signup"
};