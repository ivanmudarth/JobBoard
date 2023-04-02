import React, { useState, useEffect } from "react";
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

function View() {
  const { id, userID } = useParams();

  const [state, setState] = useState({
    title: "",
    city: "",
    state: "",
    description: "",
    avg_salary: "",
    rating: "",
    replies: [],
    reply_input: "",
    is_shortlisted: true,
  });

  const fetchData = async () => {
    const response1 = await fetch("/api/getJob/" + id);
    const response2 = await fetch("/api/getReplies/" + id);
    const response3 = await fetch("/api/isShortlisted/" + userID + "/" + id);

    const data1 = await response1.json();
    const data2 = await response2.json();
    const data3 = await response3.json();

    setState({
      title: data1[0].title,
      city: data1[0].city,
      state: data1[0].state,
      description: data1[0].description,
      avg_salary: data1[0].avg_salary,
      rating: data1[0].rating,
      replies: data2,
      is_shortlisted: data3.length > 0,
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  function Reply({ user_id, text, timestamp }) {
    return (
      <Box p={4} w="750px" borderRadius="lg" borderWidth="1px" mt={4}>
        <HStack>
          <Text as="b">User {user_id} </Text>
          <Text>&middot;</Text>
          <Text fontSize="sm">{timestamp}</Text>
        </HStack>
        <Text>{text}</Text>
      </Box>
    );
  }

  const listReplies = state.replies.map((reply) => (
    <Reply
      user_id={reply.user_id}
      text={reply.reply_text}
      timestamp={reply.timestamp}
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
    postReply();
  };

  async function postReply() {
    const user_id = userID;
    const response = await fetch("/api/postReply/" + user_id + "/" + id, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain",
      },
      body: state.reply_input,
    });
    fetchData();
  }

  const handleShortlist = (e) => {
    postShortlist();
    fetchData();
  };

  async function postShortlist() {
    const user_id = userID;
    const response = await fetch("/api/postShortlist/" + user_id + "/" + id, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain",
      },
      body: "",
    });
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
            <Flex justifyContent="space-between">
              <Text as="b" fontSize="3xl">
                {state.title}
              </Text>
              <Button
                onClick={handleShortlist}
                isDisabled={state.is_shortlisted}
              >
                {state.is_shortlisted ? "Shortlisted" : "Shortlist"}
              </Button>
            </Flex>

            <Text fontSize="xl">
              {state.city}, {state.state}{" "}
              <span style={{ fontSize: "1.5em" }}> &middot; </span>{" "}
              {state.avg_salary}k / year
            </Text>
            <Text mb={4} fontSize="xl">
              Rating: {state.rating} / 5{" "}
            </Text>

            <Text>{state.description} ...</Text>
          </Box>
          <Box w="750px" fontSize="xl">
            <Text ml={2}>Replies:</Text>
          </Box>
          <Box w="750px">
            <HStack>
              <Input
                mb={4}
                value={state.reply_input}
                onChange={handleChange}
                placeholder="Post a reply"
                size="md"
                name="reply_input"
              />
              <Button colorScheme="gray" onClick={handlePost}>
                Post
              </Button>
            </HStack>
          </Box>
          {state.replies.length > 0 && listReplies}
          {state.replies.length === 0 && <Text>No replies posted...</Text>}
        </VStack>
      </Center>
    </Box>
  );
}

export default View;
