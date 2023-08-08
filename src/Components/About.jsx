import React, { useState } from 'react';
import { Box, Button, Center, Flex, Heading, Image, Text } from '@chakra-ui/react';
import logo from '../Assets/coder.avif';

const About = () => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <Box
      py="100px"
      bg="gray.900"
      id="about"
      className="about section"
      minHeight="calc(120vh - 80px)" // Subtract the height of the sticky navbar
    >
      <Flex
        direction={{ base: 'column', md: 'row' }}
        color="white"
        align="center"
        justify="space-around"
        mx="auto" // Added auto margin for centering
        maxW="1200px" // Added max width to control content width
        height="100%" // Set the height of the Flex container to 100% of the parent Box
      >
        <Box maxW="600px" textAlign={{ base: 'center', md: 'left' }} px={{ base: 4, md: 0 }}>
          <Heading as="h2" color="white" mb="20px">
            About <Text as={"span"} color="cyan">Me</Text>
          </Heading>
          <Text id="user-detail-intro" fontSize="18px" lineHeight="1.6" color="white.400">
            I'm a passionate web developer with an unwavering commitment to excellence.
            I pay meticulous attention to detail, crafting pixel-perfect designs that create immersive and engaging web experiences.
            My toolkit includes CSS, HTML, Javascript, React, and MongoDB, resulting in memorable and impactful websites.
          </Text>
         
          <Button
            mt="20px"
            bg="cyan.600"
            color="white"
            _hover={{ bg: 'cyan.500' }}
            onClick={toggleDetails}
          >
            {showDetails ? 'Show Less' : 'Show More'}
          </Button>
          {showDetails && (
            <Box mt="20px">
              <Text fontSize="18px" color="white.400">
                Bachelor's Degree in Electrical And Electronics Engineering from AKTU , Uttar Pradesh
                <br />
                Qualified GATE (Electrical) in 2019.
                <br />
                Reach me at ☎ 7830499337 or 📧 nitin816sharma@gmail.com
                <br />
                Resides in Muzaffarnagar, UP
              </Text>
            </Box>
          )}
        </Box>
        <Center w={{ base: '100%', md: '50%' }}>
          <Image src={logo} w="50%" maxH={{ base: '50vh', md: '70vh' }} borderRadius="3xl" />
        </Center>
      </Flex>
    </Box>
  );
};

export default About;
