import {
  Box,
  Center,
  Input,
  Button,
  FormControl,
  FormLabel,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  VStack,
  Flex,
  Text,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Navbar from "./NavBar";

// TODO:
// min/max fields should be restricted to nums
// bug where filter cannot be applied again without refresh
// Show all jobs on intial lauch rather than only when they click submit
// Show name for replies rather than user id

function Filter() {
  const { id } = useParams();

  const [state, setState] = useState({
    keyword: "",
    city: "",
    state: "",
    salary_min: "",
    salary_max: "",
    rating_min: "",
    jobs: [],
  });

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    getJobs();
  };

  useEffect(() => {
    getJobs();
  }, []);

  async function getJobs() {
    const q_keyword = state.keyword
      ? state.keyword.replace(/\s/g, "&")
      : "null";
    const q_city = state.city ? state.city.replace(/\s/g, "&") : "null";
    const q_state = state.state ? state.state.replace(/\s/g, "&") : "null";
    const q_salary_min = state.salary_min ? state.salary_min : "null";
    const q_salary_max = state.salary_max ? state.salary_max : "null";
    const q_rating_min = state.rating_min ? state.rating_min : "null";
    fetch(
      "/api/getJobs/" +
        q_keyword +
        "/" +
        q_city +
        "/" +
        q_state +
        "/" +
        q_salary_min +
        "/" +
        q_salary_max +
        "/" +
        q_rating_min
    )
      .then((response) => response.json())
      .then((res) => {
        setState({ jobs: res });
      });
  }

  // Map over data to create table rows
  const tableRows = state.jobs.map((item) => (
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
    </Tr>
  ));

  return (
    <Box>
      <Navbar user_id={id} />
      <Center>
        <VStack>
          <Box maxW="md" mt={6}>
            <FormControl onSubmit={handleSubmit} mb={6}>
              <FormLabel>Keyword:</FormLabel>
              <Input
                value={state.keyword}
                onChange={handleChange}
                placeholder="Keyword"
                size="md"
                name="keyword"
                mb={4}
              />
              <FormLabel>Location:</FormLabel>
              <Flex mb={4}>
                <Input
                  value={state.city}
                  onChange={handleChange}
                  placeholder="City"
                  size="md"
                  name="city"
                  mr={2}
                />
                <Input
                  value={state.state}
                  onChange={handleChange}
                  placeholder="State"
                  size="md"
                  name="state"
                />
              </Flex>
              <FormLabel>Salary:</FormLabel>
              <Flex mb={4}>
                <Input
                  value={state.salary_min}
                  onChange={handleChange}
                  placeholder="Min"
                  size="md"
                  name="salary_min"
                  mr={2}
                />
                <Input
                  value={state.salary_max}
                  onChange={handleChange}
                  placeholder="Max"
                  size="md"
                  name="salary_max"
                />
              </Flex>
              <FormLabel>Rating:</FormLabel>
              <Input
                mb={4}
                value={state.rating_min}
                onChange={handleChange}
                placeholder="Min"
                size="md"
                name="rating_min"
              />
              <Button colorScheme="blue" onClick={handleSubmit}>
                Submit
              </Button>
            </FormControl>
          </Box>
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
          {state.jobs.length === 0 && <Text>No jobs found...</Text>}
        </VStack>
      </Center>
    </Box>
  );
}

export default Filter;
