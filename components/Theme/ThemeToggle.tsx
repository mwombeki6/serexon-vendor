import { Button } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";
import { IconMoonStars } from "@tabler/icons-react";
import { HiOutlineSun } from "react-icons/hi2";

export function ThemeToggle() {
  const { colorMode, toggleColorMode } = useColorMode();
  const dark = colorMode === "dark";

  return (
    <Button
      variant={"ghost"}
      color={dark ? "yellow" : "blue"}
      onClick={toggleColorMode}
      title="Toggle color scheme"
      width={"9"}
      height={"9"}
      size={"10"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      {dark ? <HiOutlineSun size="25px" /> : <IconMoonStars size="25px" />}
    </Button>
  );
}
