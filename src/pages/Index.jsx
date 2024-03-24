import React, { useState } from "react";
import { Box, Heading, Text, Image, Grid, Button, Flex, Spacer, IconButton, Badge, useDisclosure, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton } from "@chakra-ui/react";
import { FaShoppingCart, FaTrash } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Seamless Bra",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1572358764342-612d02e2d2d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzZWFtbGVzcyUyMGJyYXxlbnwwfHx8fDE3MTEyOTg1MzF8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 2,
    name: "Lace Bralette",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1660070605791-e5146f71ceb2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxsYWNlJTIwYnJhbGV0dGV8ZW58MHx8fHwxNzExMjk4NTMyfDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 3,
    name: "Sports Bra",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1606902965551-dce093cda6e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBicmF8ZW58MHx8fHwxNzExMjk4NTMyfDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 4,
    name: "Strapless Bra",
    price: 27.99,
    image: "https://images.unsplash.com/photo-1572358764342-612d02e2d2d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzdHJhcGxlc3MlMjBicmF8ZW58MHx8fHwxNzExMjk4NTMyfDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
];

const Index = () => {
  const [cart, setCart] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  return (
    <Box>
      <Flex bg="gray.100" p={4} alignItems="center">
        <Heading size="xl">Bra Store</Heading>
        <Spacer />
        <IconButton icon={<FaShoppingCart />} variant="outline" onClick={onOpen}>
          {cart.length > 0 && (
            <Badge colorScheme="red" borderRadius="50%">
              {cart.length}
            </Badge>
          )}
        </IconButton>
      </Flex>

      <Grid templateColumns="repeat(4, 1fr)" gap={6} p={4}>
        {products.map((product) => (
          <Box key={product.id} borderWidth={1} borderRadius="lg" p={4}>
            <Image src={product.image} alt={product.name} />
            <Heading size="md" mt={2}>
              {product.name}
            </Heading>
            <Text fontWeight="bold">${product.price}</Text>
            <Button mt={2} colorScheme="blue" onClick={() => addToCart(product)}>
              Add to Cart
            </Button>
          </Box>
        ))}
      </Grid>

      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Shopping Cart</DrawerHeader>
            <DrawerBody>
              {cart.length === 0 ? (
                <Text>Your cart is empty.</Text>
              ) : (
                cart.map((item) => (
                  <Flex key={item.id} alignItems="center" mb={2}>
                    <Image src={item.image} alt={item.name} boxSize="50px" mr={2} />
                    <Box>
                      <Text fontWeight="bold">{item.name}</Text>
                      <Text>${item.price}</Text>
                    </Box>
                    <Spacer />
                    <IconButton icon={<FaTrash />} variant="ghost" onClick={() => removeFromCart(item.id)} />
                  </Flex>
                ))
              )}
              <Button colorScheme="blue" mt={4}>
                Checkout
              </Button>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Box>
  );
};

export default Index;
