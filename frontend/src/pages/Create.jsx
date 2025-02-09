import { useColorModeValue } from "@/components/ui/color-mode";
import { toaster, Toaster } from "@/components/ui/toaster"; // Ensure correct import
import {
  Box,
  Button,
  Container,
  Heading,
  Input,
  VStack
} from "@chakra-ui/react";
import { useState } from "react";
import { useProductStore } from "./store/products";

const Create = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
    category: ""
  });

  const bg = useColorModeValue("gray.400", "gray.700");
  const { createProduct } = useProductStore();

  const handleSubmit = async () => {
    const { success, message } = await createProduct(newProduct);
    if (success) {
      toaster.create({
        title: "Success",
        description: message,
        status: "success",
        duration: 3000,
        isClosable: true,
        type: "success"
      });
    } else {
      toaster.create({
        title: "Error",
        description: message,
        status: "error",
        duration: 3000,
        isClosable: true,
        type: "error"
      })
  };
  setNewProduct({
    name: "",
    description: "",
    price: "",
    image: "",
    category: ""
  })
}

  return (
    <Container maxW={"container.sm"}>
      <Toaster />
      <VStack spacing={8}>
        <Heading as={"h1"} size={"2xl"} textAlign={"center"} mt={8}>
          Create New Item
        </Heading>

        <Box w={"60%"} display={"flex"} flexDir={"column"}>
          <Box
            w={"full"}
            p={8}
            rounded={"lg"}
            shadow={"md"}
            mt={10}
            bg={bg}
          >
            <VStack spacing={6}>
              <Input
                placeholder={"Name"}
                variant={"subtle"}
                size={"xs"}
                name="name"
                value={newProduct.name}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, name: e.target.value })
                }
              />
              <Input
                placeholder={"Description"}
                variant={"subtle"}
                size={"xs"}
                value={newProduct.description}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, description: e.target.value })
                }
              />
              <Input
                placeholder={"Price"}
                variant={"subtle"}
                size={"xs"}
                value={newProduct.price}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, price: e.target.value })
                }
              />
              <Input
                placeholder={"Image"}
                variant={"subtle"}
                size={"xs"}
                value={newProduct.image}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, image: e.target.value })
                }
              />
              <Input
                placeholder={"Category"}
                variant={"subtle"}
                size={"xs"}
                value={newProduct.category}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, category: e.target.value })
                }
              />
            </VStack>
          </Box>
          <Button
            justifySelf={"flex-end"}
            w={"25%"}
            ml={"auto"}
            mt={10}
            bg={"blue.500"}
            h={"8"}
            _hover={{ bg: "blue.700" }}
            rounded={"md"}
            onClick={handleSubmit}
          >
            SAVE
          </Button>
        </Box>
      </VStack>
    </Container>
  );
}

export default Create;