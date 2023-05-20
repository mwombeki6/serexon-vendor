import { Button } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";
import { IconSun, IconMoonStars } from "@tabler/icons-react";

export function ThemeToggle() {
  const { colorMode, toggleColorMode } = useColorMode();
  const dark = colorMode === "dark";

  return (
    <Button
      variant={"outline"}
      color={dark ? "yellow" : "blue"}
      onClick={toggleColorMode}
      title="Toggle color scheme"
    >
      {dark ? <IconSun size="1.1rem" /> : <IconMoonStars size="1.1rem" />}
    </Button>
  );
}
