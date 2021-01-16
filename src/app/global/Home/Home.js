import React from "react";

import Banner from "@molecules/Banner";
import ProductCard from "@molecules/ProductCard";
import LandingLayout from "@layouts/LandingLayout";
import { Flex, Wrap, Center, SimpleGrid } from "@chakra-ui/react";
import TitleText from "@atoms/Title";

export default function Landing() {
    return (
        <LandingLayout>
            <Banner
                title="Build this rad landing page from scratch"
                subtitle="This is the subheader section where you describe the basic benefits of your product"
                image="https://source.unsplash.com/collection/404339/800x600"
                ctaText="Create your account now"
                ctaLink="/signup"
            />
            <TitleText title="Lagi trending nih!" />
            <SimpleGrid
                columns={{ sm: 2, md: 4, lg: 6 }}
                spacing="4"
                rounded="lg"
                w="85vw"
            >
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </SimpleGrid>
        </LandingLayout >
    );
}