"use client"

import { Box } from '@chakra-ui/react';
import { DesktopNav } from './Desktop';
import { MobileNav } from './MobileNav';

export const Navbar = () => {
  return (
    <>
      <Box className="navbar-wrapper" h="120px">
        <Box pos="fixed" w="100%" mb="1rem" zIndex={10}>
          <DesktopNav />
          <MobileNav />
        </Box>
      </Box>
    </>
  );
};