import { Button, Container, Flex, HStack, Text } from "@chakra-ui/react";
import { useColorMode } from "@/components/ui/color-mode";
import { LuMoon, LuPlus, LuSun } from "react-icons/lu";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container maxW={"1140px"} px={"4"}>
      <Flex
        h={"16"}
        align={"center"}
        justify={"space-between"}
        flexDir={{ md: "row", base: "column" }}
      >
        <Link to="/">
          <Text
            color={"blue.400"}
            fontSize={{ md: "3xl", base: "2xl" }}
            fontWeight={"extrabold"}
          >
            My Items
          </Text>
        </Link>

        <HStack spacing={2} alignItems={"center"} padding={"2"}>
          <Link to="/create">
            <Button background={"none"} color={"blue.500"}>
              <LuPlus />
            </Button>
          </Link>
          <Button
            background={"none"}
            color={"blue.500"}
            onClick={toggleColorMode}
          >
            {colorMode === "light" ? <LuMoon /> : <LuSun />}
          </Button>
        </HStack>
      </Flex>
    </Container>
  );
};

export default Navbar;
