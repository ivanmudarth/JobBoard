import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription
} from '@chakra-ui/react'
import { Logo } from './Logo'
import { PasswordField } from './PasswordField'

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navigate } from "react-router-dom";


function useNavigateToFilter() {
  const navigate = useNavigate();
  function navigateToFilter() {
    navigate("/filter/clothes");
  }
  return navigateToFilter;
}


export default function SignInCard(props) {

  const [username, setUsername] = useState(" ");
  const [password, setPassword] = useState(" ");
  const [showError, changeError] = useState(false)
  const navigate = useNavigate();
  
  const handleSubmit = (e) => {
    handleSignIn() 
  };

  function handleSignIn() {
    fetch("/api/signIn/" + username + "/" + password)
      .then((response) => response.json())
      .then((res) => {
        // Navigate to Filter with res as ID 
        const id = res[0].ID;
        navigate(`/home/${id}`);
      })
      .catch((error) => {
        console.log("An error occurred:", error);
        changeError(true)
      });
  }
  

  
  return (
    <Container
      maxW="lg"
      py={{
        base: '12',
        md: '24',
      }}
      px={{
        base: '0',
        sm: '8',
      }}
    >
      <Stack spacing="8">
        <Stack spacing="6">
          <Logo />
          <Stack
            spacing={{
              base: '2',
              md: '3',
            }}
            textAlign="center"
          >
            <Heading
              size={{
                base: 'xs',
                md: 'sm',
              }}
            >
              Log in to your account
            </Heading>
            <HStack spacing="1" justify="center">
              <Text color="muted">Don't have an account?</Text>
              <Button variant="link" colorScheme="blue" onClick={props.toggleBool}>
                Sign up
              </Button>
            </HStack>
          </Stack>
        </Stack>
        <Box py={{ base: '0', sm: '8', }}
          px={{ base: '4', sm: '10', }}
          bg={{ base: 'transparent', sm: 'bg-surface', }}
          boxShadow={{ base: 'none', sm: 'md', }}
          borderRadius={{ base: 'none', sm: 'xl', }} >
          <Stack spacing="6">
            <Stack spacing="5">
              <FormControl>
                <FormLabel htmlFor="username">Username</FormLabel>
                <Input id="username" onChange={(e) => {
                  setUsername(e.target.value)
                }} />
              </FormControl>
              <PasswordField onChange={(e) => {
                setPassword(e.target.value)
              }} />
            </Stack>
            <HStack justify="space-between">
              <Checkbox defaultChecked>Remember me</Checkbox>
              <Button variant="link" colorScheme="blue" size="sm">
                Forgot password?
              </Button>
            </HStack>

            {showError &&
            <Alert status='error'>
              <AlertIcon />
              <AlertDescription>Your username or password is incorrect</AlertDescription>
            </Alert>
            }

            <Stack spacing="6">
              <Button colorScheme='teal' variant='solid' onClick={handleSubmit}>Sign in</Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Container>
  )
}



