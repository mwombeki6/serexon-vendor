import {
  Box,
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Input,
  useDisclosure,
} from "@chakra-ui/react";

import Link from "next/link";
import React, { useRef } from "react";
import { IconMenu2 } from "@tabler/icons-react";

export const NavMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef: any = useRef();

  return (
    <>
      <Button ref={btnRef} onClick={onOpen}>
        <IconMenu2 />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Logo</DrawerHeader>
          <Divider />

          <DrawerBody>
            <Link href={""}>
              <Box
                p="0.5rem"
                _hover={{ bgColor: "brand.primaryLight", color: "white" }}
              >
                items
              </Box>
            </Link>
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Close
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};
