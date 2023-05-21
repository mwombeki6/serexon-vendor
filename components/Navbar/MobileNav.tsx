import {
  Box,
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { NavMenu } from "./NavMenu";
import { ThemeToggle } from "../Theme/ThemeToggle";
import Link from "next/link";
import { AuthMenu } from "../ui/AuthMenu";

export function MobileNav() {
  return (
    <>
      <Flex
        justify="space-between"
        alignItems="center"
        display={{ base: "flex", lg: "none" }}
        px="2rem"
        py="1rem"
        borderBottom="1px"
        borderColor="gray.200"
      >
        <NavMenu />
        Logo
        <Stack direction="row" spacing={1} alignItems={"center"}>
          <ThemeToggle />
          <AuthMenu />
        </Stack>
      </Flex>
      <Box
        px="2rem"
        py="0.5rem"
        mb="1rem"
        display={{ base: "block", lg: "none" }}
      >
        search for ur items
      </Box>
    </>
  );
}
