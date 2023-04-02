import {
  Box,
  Center,
  Input,
  Button,
  VStack,
  HStack,
  Text,
} from "@chakra-ui/react";
import Navbar from "./NavBar";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";

function Home() {
  const { id } = useParams();

  const [state, setState] = useState({
    name: "",
    username: "",
    description: "", // TODO: in signup add a field "write a small description abt yourself"
    shortlist: [],
  });

  const fetchData = async () => { // TODO: 
    const response1 = await fetch("/api/getUserInfo/" + id);
    const response2 = await fetch("/api/getReplies/" + id);

    const data1 = await response1.json();
    const data2 = await response2.json();

    setState({
      name: data1[0].name,
      username: data1[0].username,
      description: data1[0].description,
      shortlist: data2,
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Box>
      <Navbar user_id={id} />
      <Center>
        <VStack>
          <Box
            p={10}
            w="750px"
            borderRadius="lg"
            borderWidth="2px"
            mt={6}
            mb={4}
          >
            <Center>
              <VStack>
                <Text as="b" fontSize="3xl">
                  {state.name}
                </Text>

                <Text fontSize="xl">{state.username}</Text>

                <Text>{state.description}</Text>
              </VStack>
            </Center>
          </Box>
          <Box w="750px" fontSize="xl">
            <Text ml={2}>Shortlist:</Text>
          </Box>
        </VStack>
      </Center>
    </Box>
  );
}

export default Home;
