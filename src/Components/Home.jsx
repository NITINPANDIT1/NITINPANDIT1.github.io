import React from 'react';
import { Box, Center, Flex, Heading, Image, Stack, Text, Link, IconButton, Button, Icon } from '@chakra-ui/react';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Import GitHub and LinkedIn icons
import logo from '../Assets/pic.png';
import Typewriter from 'typewriter-effect';
import {AttachmentIcon } from '@chakra-ui/icons'
import pdf from "../Assets/Nitin-Sharma-Resume.pdf"
const Home = () => {
  function myFun(){
    const googleDriveLink = 'https://drive.google.com/file/d/1ogeR_CuagHTv7xA2Gg_nm1KBPe59zI8H/view?usp=sharing';

    
    

    
 
    
    window.open(googleDriveLink, '_blank');
  }
  return (
    <Box py="20" bg="gray.700"  id="home">
      <Flex direction={{ base: 'column', md: 'row' }} color="white" align="center" justify="space-around">
        <Center w={{ base: '100%', md: '50%' }}>
          <Image class="home-img" src={logo} w="50%" maxH={{ base: '50vh', md: '70vh' }} maxW={{ base: '50%', md: '70%' }} borderRadius="2xl" />
        </Center>
        <Stack spacing={8} w={{ base: '100%', md: '50%' }} mt={{ base: 8, md: 0 }} px={{ base: 4, md: 0 }} textAlign={{ base: 'center', md: 'left' }}>
          <Heading as="h1" size="2xl" color="cyan" lineHeight="shorter">
            Hello👋
          </Heading>
          <Heading as="h2" size="lg">
            My Name is <Text id="user-detail-name" as="span" color="orange.400">Nitin Sharma</Text>
          </Heading>
          <Text fontSize={{ base: 'lg', md: 'xl' }} color="white.400">
            <Typewriter
              options={{
                strings: ['I am a MERN Stack Developer.', 'I am a Footballer ⚽️.', 'I am a Programming Enthusiast.'],
                autoStart: true,
                loop: true,
              }}
            />
          </Text>
          <Stack direction="row" spacing={4} mt={4} justifyContent={{ base: 'center', md: 'left' }}>
            <IconButton
             
              as={Link}
              href="https://github.com/NITINPANDIT1"
              aria-label="GitHub"
              icon={<FaGithub />}
              isRound
              variant="outline"
              colorScheme="white"
              _hover={{ color: 'blue.400' }}
              target="_blank"
              rel="noopener noreferrer"
            />
            <IconButton
              as={Link}
              href="https://www.linkedin.com/in/nitin-816-sharma"
              aria-label="LinkedIn"
              icon={<FaLinkedin />}
              isRound
              variant="outline"
              colorScheme="white"
              _hover={{ color: 'blue.400' }}
              target="_blank"
              rel="noopener noreferrer"
            />
           
            

            <Button id="resume-button-2" colorScheme={"cyan"} onClick={myFun}
            as="a" 
            href={pdf}
            target="_blank" // Open link in a new tab
            download
            
            >  
            Resume <span> <AttachmentIcon/></span>
            </Button>
          </Stack>
        </Stack>
      </Flex>
    </Box>
  );
};

export default Home;
