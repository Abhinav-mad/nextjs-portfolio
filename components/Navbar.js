import React, { forwardRef } from "react";
import Logo from "./logo";

import {
  Box,
  Container,
  Flex,
  Heading,
  Menu,
  Stack,
  useColorMode,
  useColorModeValue,
  MenuButton,
  IconButton,
  MenuList,
  MenuItem,
  Link
} from "@chakra-ui/react";

import {HamburgerIcon} from "@chakra-ui/icons";
import ThemeButton from "./theme-button";
import NextLink from "next/link";
import { AiOutlineFilePdf } from "react-icons/ai";

const LinkItem = ({ href, path, target, children, ...props }) => {
  const active = path == href;
  const inactiveColor = useColorModeValue("gray800", "whiteAlpha.900");

  return (
    <Link
    as={NextLink}
      href={href}
      p={2}
      bg={active ? "grassTeal" : undefined}
      color={active ? "#202023" : inactiveColor}
      target={target}
      _hover={{ bg: useColorModeValue("gray.200", "gray.700") }}
      {...props}
      
    >
      {children}
    </Link>
  );
};

const MenuLink = forwardRef((props, ref) => (
  <Link ref={ref} as={NextLink} {...props} />
));
MenuLink.displayName = "MenuLink";

function Navbar(props) {
  const { path } = props;
  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue("#ffffff40", "#20202380")}
      css={{ backdropFilter: "blur(10px)" }}
      zIndex={2}
      {...props}
      top="0"
    >
      <Container
        display={"flex"}
        maxW="container.md"
        p={2}
        align="center"
        wrap="wrap"
        justifyContent={"space-between"}
      >
        <Flex mr={5} align={"center"}>
          <Heading as={"h1"} size="lg" letterSpacing="tighter">
            <Logo />
          </Heading>
        </Flex>
        <Stack
          direction={{ base: "column", md: "row" }}
          display={{ base: "none", md: "flex" }}
          width={{ base: "full", md: "auto" }}
          align="center"
          flexGrow={1}
          mt={{ base: "4", md: "0" }}
        >
          <LinkItem href="/works" path={path}>
            Works
          </LinkItem>
          <LinkItem href="/resume.pdf" target="_blank" path={path} pl={2}>
            <span
              style={{ display: "inline-flex", alignItems: "center", gap: 5 }}
            >
              <AiOutlineFilePdf />
              Resume
            </span>
          </LinkItem>
        </Stack>
        <Box flex={1} align="right">
          <ThemeButton />
          <Box display={{ base: "inline-block", md: "none" }} m={1}>
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="options"
              />
              <MenuList>
                <MenuItem href="/" as={MenuLink}>
                  About
                </MenuItem>
                <MenuItem href="/works" as={MenuLink}>
                  Work
                </MenuItem>
                <MenuItem href="/resume.pdf" as={MenuLink} target="_blank">
                  Resume
                </MenuItem>
              </MenuList>
            </Menu> 
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Navbar;
