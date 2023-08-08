import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Box, Text, Center, SimpleGrid, Heading } from "@chakra-ui/react";

const Githubstats = () => {
  return (
    <Box py="80px" bg="gray.900" >
      <Center>
        <Heading  color="white" mt="40px" mb="20px">
          Github <Text as={"span"} textColor="cyan">Stats</Text>
        </Heading>
      </Center>

      <Center color="white" mb="3">
        <p className="text">
          My Contributions and Stats
        </p>
      </Center>

      <Center color={"white"}>
        <GitHubCalendar
          fontSize={16}
          blockSize={15}
          year={2023}
          username="NITINPANDIT1"
        />
      </Center>

      

      <Center mt="6">
        <SimpleGrid
          columns={{ base: 1, md: 3 }} // Column layout for small screens, row layout for medium and larger screens
          gap={10}
          w="80%"
        >
            
          <img
            width={"100%"}
            id="github-stats-card"
            align="center"
            src="https://github-readme-stats.vercel.app/api?username=NITINPANDIT1&theme=neon&border_radius=2.7&show_icons=true"
            alt="NITINPANDIT1"
          />
          <Center>
          <img
            width={"61%"}
           
            id="github-top-langs"
            align="center"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=NITINPANDIT1&theme=neon&border_radius=2.7"
            alt="NITINPANDIT1"
          />
          </Center>
          <img
          width={"100%"}
            id="github-streak-stats"
            align="center"
            src="https://github-readme-streak-stats.herokuapp.com/?user=NITINPANDIT1&theme=neon&border_radius=2.7&date_format=M%20j%5B%2C%20Y%5D"
            alt="NITINPANDIT1"
          />
        </SimpleGrid>
      </Center>
    </Box>
  );
};

export default Githubstats;
