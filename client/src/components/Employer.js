import React, { useState, useEffect } from "react";
import { Select } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import {
  Box,
  Center,
  Input,
  Button,
  VStack,
  HStack,
  Text,
  Flex,
} from "@chakra-ui/react";
import Navbar from "./NavBar";
import { useNavigate } from 'react-router-dom';

function Employer() {
  const { id, userID } = useParams();
  const navigate = useNavigate();

  const [state, setState] = useState({
    employer: "",
    employee_count: "",
    revenue: "",
    ownership: "",
    city: "",
    state: "",
    reply_input: "",
    review_num: 1,
    reviews: [],
  });

  const handleChangeReview = (event) => {
    setState({ ...state, review_num: parseInt(event.target.value) });
  };


  const fetchData = async () => {
    
    const response1 = await fetch("/api/getEmployer/" + id);
    const response2 = await fetch("/api/getReviews/" + id);

    const data1 = await response1.json();
    const data2 = await response2.json();

    setState({
        employer: data1[0].name,
        employee_count:  data1[0].employee_count,
        revenue:  data1[0].revenue,
        ownership:  data1[0].ownership_type,
        city:  data1[0].city,
        state:  data1[0].state,
        reviews: data2
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  function Review({ user_id, text, timestamp, review }) {
    return (
      <Box p={4} w="750px" borderRadius="lg" borderWidth="1px" mt={4}>
        <HStack>
          <Text as="b">User {user_id} </Text>
          <Text>&middot;</Text>
          <Text fontSize="sm">{timestamp}</Text>
        </HStack>
        <Text>{review} / 5</Text>
        <Text>{text}</Text>
      </Box>
    );
  }

  const listReviews = state.reviews.map((review) => (
    <Review
      user_id={review.user_id}
      text={review.review_text}
      timestamp={review.timestamp}
      review={review.review_rating}
    />
  ));

  const handleChange = (e) => {
    e.preventDefault();
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handlePost = (e) => {
    postReview();
  };

  async function postReview() {
    const user_id = userID;
    const response = await fetch("/api/postReview/" + user_id + "/" + id + "/" + state.review_num, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain",
      },
      body: state.reply_input,
    });
    fetchData();
  }

  return (
    <Box>
      <Navbar user_id={userID} />
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
              <Text as="b" fontSize="3xl">
                {state.employer} 
              </Text>

            <br/><br/>
              <Text fontSize="xl">
                Employee Count: {state.employee_count} 
              </Text>
              <br/>
              <Text fontSize="xl">
                Revenue: {state.revenue} 
              </Text>
              <br/>
              <Text fontSize="xl">
                {state.ownership} 
              </Text>
              <br/>
            </Box>  
            <Box w="750px" fontSize="xl">
            <Text ml={2}>Reviews:</Text>
          </Box>
          <Box w="750px">
            <HStack>
              <Input
                mb={4}
                value={state.reply_input}
                onChange={handleChange}
                placeholder="Post a review"
                size="md"
                name="reply_input"
              />
              <Select placeholder="Select a review" width="60" onChange={handleChangeReview}>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                </Select>
              <Button colorScheme="gray" onClick={handlePost}>
                Post
              </Button>
            </HStack>
          </Box>
          {state.reviews.length > 0 && listReviews}
          {state.reviews.length === 0 && <Text>No reviews posted...</Text>}
            </VStack>
            </Center>
        </Box>
  );
}

export default Employer;
