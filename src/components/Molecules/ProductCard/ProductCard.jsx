import { Box, Image, Badge, Link } from '@chakra-ui/react';
import StarIcon from '@atoms/StarIcon';

const ProductCard = (props) => {
    const property = {
        imageUrl: "https://bit.ly/2Z4KKcF",
        imageAlt: "Rear view of modern home with pool",
        beds: 3,
        baths: 2,
        title: "Modern home in city center in the heart of historic Los Angeles",
        formattedPrice: "Rp1.900",
        reviewCount: 34,
        rating: 4,
    }

    return (
        <Link href={"/product/" + props} style={{ textDecoration: "none" }}>
            <Box w="100%" h="100%" borderRadius="xl" overflow="hidden" shadow="xl">
                <Image src={property.imageUrl} alt={property.imageAlt} />

                <Box p="2">
                    <Box d="flex" alignItems="baseline">
                        <Badge borderRadius="full" px="2" colorScheme="teal">
                            New
                    </Badge>
                        <Box
                            color="gray.500"
                            fontWeight="semibold"
                            letterSpacing="wide"
                            fontSize="xs"
                            textTransform="uppercase"
                            ml="2"
                        >
                            {property.beds} beds &bull; {property.baths} baths
                    </Box>
                    </Box>

                    <Box
                        mt="1"
                        // fontWeight="semibold"
                        as="p"
                        fontSize="sm"
                        lineHeight="tight"
                        noOfLines={2}
                    >
                        {property.title}
                    </Box>

                    <Box
                        fontWeight="semibold"
                    >
                        {property.formattedPrice}
                    </Box>

                    <Box d="flex" mt="2" alignItems="center">
                        {Array(5)
                            .fill("")
                            .map((_, i) => (
                                <StarIcon
                                    key={i}
                                    color={i < property.rating ? "gold" : "gray"}
                                />
                            ))}
                        <Box as="span" ml="2" color="gray.600" fontSize="sm">
                            {property.reviewCount} reviews
              </Box>
                    </Box>
                </Box>
            </Box>
        </Link>
    )
}

export default ProductCard;