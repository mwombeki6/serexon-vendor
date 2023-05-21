"use client";

import { Box, Button, Flex, Stack } from "@chakra-ui/react";
import Link from "next/link";
import NextLink from "next/link";
import { ThemeToggle } from "../Theme/ThemeToggle";

export function DesktopNav() {
  return (
    <Flex
      justify="space-between"
      alignItems="center"
      display={{ base: "none", lg: "flex" }}
      px="2rem"
      py="1rem"
      borderBottom="1px"
      borderColor="gray.200"
    >
      <Stack direction="row" gap={6} flex={1} alignItems="center">
        <Box mr="1rem">Logo</Box>
        <Box>
          <Link href={""}>mwombeki</Link>
        </Box>
        search here for all your staffss
      </Stack>

      <Stack
      
        alignItems={"center"}
        direction="row"
        spacing={2}
      >
        <ThemeToggle />
        <NextLink href={"/login"}>
          <Button
            display={{ base: "none", md: "inline-flex" }}
            fontSize={"sm"}
            fontWeight={"semibold"}
            variant="outline"
          >
            login
          </Button>
        </NextLink>

        <NextLink href={"/signUp"}>
          <Button
            //as={"a"}
            display={{ base: "none", md: "inline-flex" }}
            fontSize={"sm"}
            fontWeight={"semibold"}
            //color={"white"}
            variant={"outline"}
            _hover={{
              bg: "blue.200",
            }}
          >
            SignUp
          </Button>
        </NextLink>
      </Stack>
    </Flex>
  );
}
