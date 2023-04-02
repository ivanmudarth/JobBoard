import React from 'react';
import { useState } from "react";
import {
    VStack,
    Heading,
    Text,
    Flex,
    Button,
    Box,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    FormControl,
    FormLabel,
    Input,
    Textarea,
    FormErrorMessage,
    ModalFooter
  } from '@chakra-ui/react';
import Navbar from './NavBar';

import { useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";

const JobPostingForm = () => {
    const { id } = useParams();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();

    const handleSaveClick = () => {
      setIsModalOpen(true);
    };
  
    const handleCloseModal = () => {
      setIsModalOpen(false);
    };

    const goBackToLogin = () => {
        navigate(`/home/${id}`)
    }

    const [formData, setFormData] = useState({
        employerId: undefined,
        jobTitle: "",
        jobDescription: "",
        minSalary: undefined,
        maxSalary: undefined,
        avgSalary: undefined,
        city: "",
        state: "",
      });

      const [employerDetails, setEmployerDetails] = useState({
        employerName: '',
        employeeCount: '',
        revenue: '',
        ownershipType: '',
        city: '',
        state: '',
      });


      const [jobDescriptionError, setJobDescriptionError] = useState("");
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "jobDescription" && value.length > 550) {
          setJobDescriptionError("Job description cannot exceed 550 characters.");
        } else {
          setJobDescriptionError("");
        }
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };

      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEmployerDetails((prevDetails) => ({
          ...prevDetails,
          [name]: value,
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData); // replace with your own logic for submitting the data
      };

      const getEmployerID = () => {
        // get new ID here 
        setFormData({employerId: 5}) // change this to new ID 
        setIsModalOpen(false); // close modal 
      }

      const addJob = () => {
        // add job and then navigate 
        navigate(`/filter/${id}`)
      }

  return (
    <Box>
      <Navbar user_id={id} />
    <Box w="70%" maxW="70%" margin="0 auto">
      <VStack p={4} alignItems="flex-start">
        <Flex justifyContent="space-between" alignItems="flex-start" w="100%">
          <Heading size="lg" mb={2}>
            Post a job
          </Heading>
          <Button colorScheme="green" variant="outline"  onClick={handleSaveClick}>
            New Employer? Get Employee ID
          </Button>
        </Flex>
        <Text mb={4}>Fill out the form below to post a job</Text>
      </VStack>

      <Box p={4}>
      <form>
        <FormControl mb={3}>
          <FormLabel>Employer ID</FormLabel>
          <Input
            type="text"
            name="employerId"
            value={formData.employerId}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl mb={3}>
          <FormLabel>Job Title</FormLabel>
          <Input
            type="text"
            name="jobTitle"
            value={formData.jobTitle}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl mb={3} isInvalid={!!jobDescriptionError}>
          <FormLabel>Job Description</FormLabel>
          <Textarea
            name="jobDescription"
            value={formData.jobDescription}
            onChange={handleChange}
            maxLength={550}
          />
          <FormErrorMessage>{jobDescriptionError}</FormErrorMessage>
        </FormControl>
        <FormControl mb={3}>
          <FormLabel>Min Salary</FormLabel>
          <Input
            type="number"
            name="minSalary"
            value={formData.minSalary}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl mb={3}>
          <FormLabel>Max Salary</FormLabel>
          <Input
            type="number"
            name="maxSalary"
            value={formData.maxSalary}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl mb={3}>
          <FormLabel>Avg Salary</FormLabel>
          <Input
            type="number"
            name="avgSalary"
            value={formData.avgSalary}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl mb={3}>
          <FormLabel>City</FormLabel>
          <Input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl mb={3}>
          <FormLabel>State</FormLabel>
          <Input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleChange}
          />
        </FormControl>
        <Button colorScheme="blue" mr={3} onClick={addJob}> 
              Submit 
        </Button>
            <Button variant="ghost" onClick={goBackToLogin}>
              Cancel
        </Button>
      </form>
    </Box>

    <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Get employer ID</ModalHeader>
          <ModalBody>
            <form>
              <FormControl mb={3}>
                <FormLabel>Employer name</FormLabel>
                <Input
                  type="text"
                  name="employerName"
                  value={employerDetails.employerName}
                  onChange={handleInputChange}
                />
              </FormControl>
              <FormControl mb={3}>
                <FormLabel>Employee count</FormLabel>
                <Input
                  type="text"
                  name="employeeCount"
                  value={employerDetails.employeeCount}
                  onChange={handleInputChange}
                />
              </FormControl>
              <FormControl mb={3}>
                <FormLabel>Revenue</FormLabel>
                <Input
                  type="text"
                  name="revenue"
                  value={employerDetails.revenue}
                  onChange={handleInputChange}
                />
              </FormControl>
              <FormControl mb={3}>
                <FormLabel>Ownership type</FormLabel>
                <Input
                  type="text"
                  name="ownershipType"
                  value={employerDetails.ownershipType}
                  onChange={handleInputChange}
                />
              </FormControl>
              <FormControl mb={3}>
                <FormLabel>City</FormLabel>
                <Input
                  type="text"
                  name="city"
                  value={employerDetails.city}
                  onChange={handleInputChange}
                />
              </FormControl>
              <FormControl mb={3}>
                <FormLabel>State</FormLabel>
                <Input
                  type="text"
                  name="state"
                  value={employerDetails.state}
                  onChange={handleInputChange}
                />
              </FormControl>
            </form>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={getEmployerID}>
              Submit
            </Button>
            <Button variant="ghost" onClick={handleCloseModal}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

    </Box>
    </Box>
  );
};

export default JobPostingForm;
