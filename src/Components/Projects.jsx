import React from 'react';
import { Box, Button, Flex, Heading, Image, Link, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import project1Image from '../Assets/MbalyangHome.png';
import project2Image from '../Assets/GreenParadis.png';
import project3Image from '../Assets/boatLifeStyle.png';
import project4Image from '../Assets/Sephora.png';

const Projects = () => {
  const projects = [
    {
      title: 'Mbalayang Travel Agency',
      description: "A full-stack travel agency website where users can explore and book personalized travel packages. Built with React, Redux, MongoDB, and Chakra UI. Collaborative project executed by a team of 5 members.",
      techStacks: ['React', 'Redux', 'MongoDB',"JSON","Chakra UI"],
      githubLink: 'https://github.com/NITINPANDIT1/mbalayang',
      deploymentLink: 'https://mbalayang.vercel.app/',
      image: project1Image,
    },
    {
      title: 'Green Paradise',
      description: "Gardening essentials E-commerce Web App. With a diverse range of  plants, fertilizers, tools, and more. Developed using React, Redux, JSON, and Chakra UI. Collaborative project executed by a team of 5 members.",
      techStacks: ['React','Redux',"JSON","Chakra UI"],
      githubLink: 'https://github.com/NITINPANDIT1/project--spiffy/tree/main',
      deploymentLink: 'https://fluffy-cocada-764c66.netlify.app/',
      image: project2Image,
    },
    {
      title: 'Boat Lifestyle Products',
      description: "An e-commerce website for lifestyle products, including speakers, smart watches, earbuds and accessories. Built using HTML, CSS, and JavaScript. Collaborative project executed by a team of 5 members.",
      techStacks: ['HTML',"CSS","JavaScript"],
      githubLink: 'https://github.com/ShubhamRaut187/Project-Boatlifestyle-Clone-Masai-',
      deploymentLink: 'https://cozy-kitten-74789c.netlify.app/products',
      image: project3Image,
    },
    {
      title: 'Sephora',
      description: "A clone of the Sephora website, featuring a wide range of cosmetic products. Developed using React, Redux, JSON, and Chakra UI. Collaborative project executed by a team of 5 members.",
      techStacks: ['React', 'Redux', "JSON","Chakra UI"],
      githubLink: 'https://github.com/NITINPANDIT1/Sephora-Clone-Project',
      deploymentLink: '#',
      image: project4Image,
    }
  ];

  return (
    <Box   py={20} p={"10%"} bg="gray.700" >
      <Heading textAlign="center" color={"white"} mb={8}>
        Projects <Text as={"span"} color={'cyan'}>I Made  </Text>
      </Heading>
      <SimpleGrid id="projects" columns={{ base: 1, sm: 1, md: 1, lg: 2 }} gap={6}>
        {projects.map((project, index) => (
          <Box
          className="project-card"
            key={index}
            borderWidth="2px"
            borderRadius="lg"
            overflow="hidden"
            h="100%"
            textColor={"white"}
          >
            <Image
             
              src={project.image}
              alt={project.title}
              objectFit="cover"
              w="100%" 
              h="300px"
            />
            <Box p={6}>
              <Stack spacing={1}>
                <Heading class="project-title" fontSize="xl" color="white">{project.title}</Heading>
                <Text class="project-description" color="white">{project.description}</Text>
                <Text fontWeight="bold" color="white">Tech Stack</Text>
                <Text class="project-tech-stack" fontWeight="bold" color="white">{ project.techStacks.join(' | ')}</Text>
              </Stack>
              <Flex justifyContent="space-around" mt={4}>
                <Button className="project-github-link" as={Link} colorScheme="cyan" color={"white"} href={project.githubLink} target="_blank" rel="noopener noreferrer">
                  Source Code
                </Button>
                <Button  className="project-deployed-link" as={Link} colorScheme="cyan" color={"white"}  href={project.deploymentLink} target="_blank" rel="noopener noreferrer">
                  Live
                </Button>
              </Flex>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Projects;
