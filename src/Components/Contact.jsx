import React, { useState } from 'react';
import {
  Box,
  Button,
  Center,
  Flex,
  Image,
  Text,
  Link,
  HStack,
  VStack,
  IconButton,
  Heading,
} from '@chakra-ui/react';
import { FaPhone, FaEnvelope, FaMapMarker } from 'react-icons/fa';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import ContactForm from './ContactForm';
import  logo from "../Assets/contact.avif";

const Contact = () => {
       let[form ,setForm]=  useState(false)
  return (
    <Box id="contact"  py="80px" bg="gray.700" >
      <Center>
        <Heading  color="white" mb="20px">
          Contact <Text as={"span"} color="cyan" > Me</Text>
        </Heading>
      </Center>
      <Flex
        direction={{ base: 'column', md: 'row' }}
        color="white"
        align="center"
        justify="space-around"
        mx="auto"
        maxW="1200px"
      >
        <Box maxW="600px" textAlign={{ base: 'center', md: 'left' }} px={{ base: 4, md: 0 }}>
          <Text fontSize="18px" lineHeight="1.6" color="white.400">
            <HStack spacing={4} mb={4}>
              <IconButton
                as={Link}
                href="tel:7830499337"
                aria-label="Phone"
                icon={<FaPhone />}
                colorScheme="cyan"
                variant="ghost"
              />
              <Text  id="contact-phone">7830499337</Text>
            </HStack>
            <HStack spacing={4} mb={4}>
              <IconButton
                as={Link}
                href="mailto:nitin816sharma@gmail.com"
                aria-label="Email"
                icon={<FaEnvelope />}
                colorScheme="cyan"
                variant="ghost"
              />
              <Text id="contact-email">nitin816sharma@gmail.com</Text>
            </HStack>
            <HStack spacing={4} mb={4}>
              <IconButton
               id="contact-github"
                as={Link}
                href="https://github.com/NITINPANDIT1"
                aria-label="GitHub"
                icon={<AiFillGithub />}
                colorScheme="cyan"
                variant="outline"
                target="_blank"
                rel="noopener noreferrer"
              />
              <Text>GitHub</Text>
            </HStack>
            <HStack spacing={4} mb={4}>
              <IconButton
                id="contact-linkedin"
                as={Link}
                href="https://www.linkedin.com/in/nitin-816-sharma"
                aria-label="LinkedIn"
                icon={<AiFillLinkedin />}
                colorScheme="cyan"
                variant="outline"
                target="_blank"
                rel="noopener noreferrer"
              />
              <Text>LinkedIn</Text>
            </HStack>
            <HStack spacing={4}>
              <IconButton
                aria-label="Location"
                icon={<FaMapMarker />}
                colorScheme="cyan"
                variant="ghost"
              />
              <Text>Muzaffarnagar, UP</Text>
            </HStack>
          </Text>
          
          <Button
            mt="20px"
            bg="cyan.600"
            color="white"
            _hover={{ bg: 'cyan.500' }}
            onClick={()=>{setForm(true)}}
            
          >
            Send Message
          </Button>
          
        </Box>
        
          <Image
            src={logo}
            w={{ base: '50%', md: '30%' }}
            
            maxH={{ base: '50vh', md: '70vh' }}
            borderRadius="3xl"
          />
       
      </Flex>
       <br />
      {form?<ContactForm />:<></>}
    </Box>
  );
};

export default Contact;
