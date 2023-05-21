import {
  Text,
  ModalOverlay,
  useDisclosure,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Stack,
} from "@chakra-ui/react";
import { HiUserCircle } from "react-icons/hi2";
import NextLink from "next/link";
import React from "react";

export const AuthMenu = () => {
  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  );

  const OverlayTwo = () => (
    <ModalOverlay
      bg="none"
      backdropFilter="auto"
      backdropInvert="80%"
      backdropBlur="2px"
    />
  );

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = React.useState(<OverlayOne />);

  return (
    <>
      <Button
        ml="4"
        onClick={() => {
          setOverlay(<OverlayTwo />);
          onOpen();
        }}
        width={"9"}
        height={"9"}
        size={"10"}
        //justifyContent={"center"}
        alignItems={"center"}
      >
        <HiUserCircle size={25} />
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent alignItems={"center"} w={'90'}>
          <ModalBody>
            <Stack direction={"row"} spacing={20}>
              <NextLink href={"/login"}>
                <Button
                  display={{ base: "", md: "inline-flex" }}
                  fontSize={"sm"}
                  fontWeight={"semibold"}
                  variant="outline"
                  onClick={onClose}
                >
                  login
                </Button>
              </NextLink>
              <NextLink href={"/signUp"}>
                <Button
                  //as={"a"}
                  display={{ base: "block", md: "inline-flex" }}
                  fontSize={"sm"}
                  fontWeight={"semibold"}
                  //color={"white"}
                  variant={"outline"}
                  _hover={{
                    bg: "blue.200",
                  }}
                  onClick={onClose}
                >
                  SignUp
                </Button>
              </NextLink>
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
