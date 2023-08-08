import React from 'react';
import { Box, Center, Text, HStack, SimpleGrid, Flex, Icon, Heading } from '@chakra-ui/react';
import { FaReact, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { IoLogoNodejs, IoLogoGithub, IoLogoJavascript } from 'react-icons/io';
import { DiMongodb, DiGit, DiVisualstudio, DiJava } from 'react-icons/di';
import { SiChakraui, SiRedux, SiMongoose, SiExpress, SiNetlify } from 'react-icons/si';


const skillsData = [
  {
    groupName: 'Crafting Stunning Interfaces - Favorite frontend technologies for front-end web development and component design.',
    skills: [
      { name: 'HTML', icon: FaHtml5, color: '#E44D26' }, // HTML orange color
      { name: 'CSS', icon: FaCss3Alt, color: '#2965F1' }, // CSS blue color
      { name: 'React', icon: FaReact, color: '#61DAFB' }, // React blue color
      { name: 'Redux', icon: SiRedux, color: '#764ABC' }, // Redux purple color
      { name: 'Chakra UI', icon: SiChakraui, color: '#319795' }, // Chakra UI teal color
      
      
    ],
  },
  {
    groupName: 'Building Robust Backends - Preferred technologies for back-end development and database architecture.',
    skills: [
      { name: 'Node.js', icon: IoLogoNodejs, color: '#68A063' }, // Node.js green color
      { name: 'MongoDB', icon: DiMongodb, color: '#4DB33D' }, // MongoDB green color
      { name: 'Mongoose', icon: SiMongoose, color: '#880000' }, // Mongoose red color
      { name: 'Express', icon: SiExpress, color: '#000000' }, // Express black color
    ],
  },
  {
    groupName: 'Mastering Version Control - Tools used for version control, code editing, and deployment',
    skills: [
      { name: 'Git', icon: DiGit, color: '#F05032' }, // Git red color
      { name: 'Visual Studio Code', icon: DiVisualstudio, color: '#007ACC' }, // VS Code blue color
      { name: 'GitHub', icon: IoLogoGithub, color: '#181717' }, // GitHub black color
      { name: 'Netlify', icon: SiNetlify, color: '#00C7B7' }, // Netlify teal color
    ],
  },
  {
    groupName: 'Coding Superpowers - The languages that empower me to build full stack web apps',
    skills: [
      { name: 'JavaScript', icon: IoLogoJavascript, color: '#F7DF1E' }, // JavaScript yellow color
      { name: 'Java', icon: DiJava, color: '#007396' }, // Java blue color
    ],
  }
];

const SkillsAndStatistics = () => {
  return (
    <Box py="80px" bg="gray.900" id="skills">
      <Center>
        <Heading  color="White" mb="8">
        Technical <Text as={"span"} textColor="cyan"> Skills</Text>
        </Heading>
      </Center>
      <SimpleGrid columns={{ base: 1, md: 1, lg: 2 }} spacing={8} mx="auto" maxW="1200px">
        {skillsData.map(group => (
          <Flex
            key={group.groupName}
            direction="column"
            align="center"
            justify="center"
            w="100%"
            p={4}
            bg="gray.800"
            borderRadius="lg"
            boxShadow="lg"
            mb={8}
          >
            <HStack mb={2} direction="column" alignItems="center">
              {group.skills.map(skill => (
                <Box className="skills-card" key={skill.name} textAlign="center">
                  <Box
                    w="100px"
                    h="100px"
                    bg={skill.color}
                    borderRadius="full"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    boxShadow="md"
                  >
                    <Icon className="skills-card-img" as={skill.icon} color="white" boxSize="45px" />
                  </Box>
                  <Text className="skills-card-name" color="white" mt={2}>
                    {skill.name}
                  </Text>
                </Box>
              ))}
            </HStack>
            <Text textAlign="center" color="white">
              {group.groupName}
            </Text>
          </Flex>
        ))}
      </SimpleGrid>

      
    </Box>
  );
};

export default SkillsAndStatistics;
