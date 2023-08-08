import React from 'react';
import { Box, Button, FormControl, FormLabel, Input, Textarea } from '@chakra-ui/react';

const ContactForm = () => {
  return (
    <Box w={"55%"} margin="auto">
      <form target="_blank" action="https://formsubmit.co/nitin816sharma@gmail.com" method="POST">
        <FormControl mb={4}>
          <div className="form-row">
            <div className="col">
              <FormLabel   color="white">Full Name</FormLabel>
              <Input  color="white" type="text" name="name" placeholder="Full Name" required />
            </div>
            <div className="col">
              <FormLabel  color="white">Email Address</FormLabel>
              <Input  color="white" type="email" name="email" placeholder="Email Address" required />
            </div>
          </div>
        </FormControl>
        <FormControl mb={4}>
          <FormLabel  color="white">Your Message</FormLabel>
          <Textarea   color="white" name="message" placeholder="Your Message" rows="10" required />
        </FormControl>
        <Button
          type="submit"
          size="lg"
         colorScheme={"cyan"}
          color="white"
          _hover={{ bg: 'cyan.600' }}
          w="150px"
         
        >
         Send Email
        </Button>
      </form>
    </Box>
  );
};

export default ContactForm;
