import Image from "next/image";
import { Box, LinkBox, LinkOverlay, Text, Link, Flex } from "@chakra-ui/react";
import { IoLogoGithub } from "react-icons/io";
import { Global } from "@emotion/react";

import React from "react";

export const GridItems = ({ children, href, title, thumbnail }) => {
  return (
    <Box w="100%" align="center" className="grid-item">
      <LinkBox cursor="pointer">
        <Image src={thumbnail} alt={title} placeholder="blur" loading="lazy" />
        <LinkOverlay href={href} target="_blank">
          <Text mt={2}>{title}</Text>
          <Text fontSize={13}>{children}</Text>
        </LinkOverlay>
      </LinkBox>
    </Box>
  );
};

export const WorksGridItem = ({ children, title, thumbnail, github, site }) => {
  return (
    <LinkBox
      as="article"
      w="100%"
      textAlign="center"
      p={4}
      borderRadius="md"
      boxShadow="md"
      bg="white"
      _dark={{ bg: "gray.800" }}
      mb={4}
    >
      <Box w="100%" aspectRatio="16/9" overflow="hidden" borderRadius="md" mb={3}>
        <Image
          src={thumbnail}
          alt={title}
          loading="lazy"
          className="grid-style"
          height={300}
          width={500}
          style={{ objectFit: "cover" }}
        />
      </Box>
      <Text fontWeight="bold" fontSize={16} mb={2}>{title}</Text>
      <Text fontSize={14} mb={3}>{children}</Text>
      <Flex justify="center" align="center" gap={2} mb={2}>
        <IoLogoGithub color="teal" />
        <Link href={github || "#"} isExternal color="teal.500" fontWeight="semibold">
          GitHub Link
        </Link>
      </Flex>
      <LinkOverlay href={site || "#"} isExternal>
        <Text
          as="span"
          display="inline-block"
          px={4}
          py={1}
          bg="teal.500"
          color="white"
          borderRadius="md"
          fontWeight="bold"
          cursor="pointer"
          _hover={{ bg: "teal.600" }}
        >
          View
        </Text>
      </LinkOverlay>
    </LinkBox>
  );
};

export const GridItemstyle = () => {
  return (
    <Global
      styles={`
        .grid-style{
        border-radius:23px;}`}
    />
  );
};
