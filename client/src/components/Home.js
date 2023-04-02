import {
  Box,
  Center,
  Button,
  VStack,
  Text,
  Image,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
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

  const fetchData = async () => {
    // TODO:
    const response1 = await fetch("/api/getUserInfo/" + id);
    const response2 = await fetch("/api/getShortlist/" + id);

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

  const handleRemove = (job_id) => {
    console.log(job_id);
    removeShortlist(job_id);
  };

  async function removeShortlist(job_id) {
    const response = await fetch("/api/removeShortlist/" + id + "/" + job_id, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain",
      },
      body: "",
    });
    fetchData();
  }

  // Map over data to create table rows
  const tableRows = state.shortlist.map((item) => (
    <Tr key={item.id}>
      <Td>{item.title}</Td>
      <Td>{item.city}</Td>
      <Td>{item.state}</Td>
      <Td>{item.avg_salary}</Td>
      <Td>{item.rating}</Td>
      <Td>
        <Button as={Link} to={`/view/${item.id}/${id}`}>
          View
        </Button>
      </Td>
      <Td>
        <Button colorScheme="red" onClick={() => handleRemove(item.id)}>
          Remove
        </Button>
      </Td>
    </Tr>
  ));

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
                <Image
                  src="https://global-uploads.webflow.com/620c0d2e51cac37f5958848f/620c0d2e51cac30973588b05_60d39b4a9632142dfe527b0b_AdobeStock_346839683.jpeg"
                  boxSize="200px"
                />

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
          {state.shortlist.length > 0 && (
            <Box overflowY="scroll" maxHeight="800px">
              <Table variant="simple">
                <Thead>
                  <Tr>
                    <Th>Title</Th>
                    <Th>City</Th>
                    <Th>State</Th>
                    <Th>Average Salary</Th>
                    <Th>Rating</Th>
                  </Tr>
                </Thead>
                <Tbody>{tableRows}</Tbody>
              </Table>
            </Box>
          )}
          {state.shortlist.length === 0 && (
            <Text>No shortlisted jobs found...</Text>
          )}
        </VStack>
      </Center>
    </Box>
  );
}

export default Home;
