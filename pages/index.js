/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Box, Button, Container, Heading, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Paragraph from "@/components/paragraph";
import Highlight from "@/components/highlight";
import Link from "next/link";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { IoLogoGithub,IoLogoLinkedin  } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import Section from "@/components/section";
const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue("#ffffff40", "#20202380")}
        css={{ backdropFilter: "blur(10px)" }}
      >
        Hello I'm a fullstack Developer | MERN Stack Enthusiast
      </Box>

      <Box mt={2} display={{ md: "flex" }}>
        <Box>
          <Heading as="h2" variant={"page-title"}>
            ABHINAV
          </Heading>
          <p>Web developer</p>
        </Box>
        <Box
          flexGrow={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <MotionBox
            borderColor="whiteAlpha.800"
            borderWidth={2}
            boxShadow="0px 10px 4px rgba(0, 0, 0, 0.1)"
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
            whileHover={{ scale: 1.1 }}
          >
            <Image
              src="/Avatar.jpeg"
              width="100"
              height="100"
              alt="Profile picture of Abhinav"
            />
          </MotionBox>
        </Box>
      </Box>

      <MotionBox
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7 }}
        mb={6}
      >
        <section>
          <Heading as={"h4"} variant={"section-title"}>
            About me
          </Heading>
 <Paragraph>
  I’m a passionate full-stack developer dedicated to building scalable, 
  efficient, and future-ready web applications. From crafting sleek, 
  responsive interfaces with <Highlight>React.js</Highlight>, 
  <Highlight>TypeScript</Highlight>, and <Highlight>Fluent UI</Highlight> 
  to architecting robust back-end systems using 
  <Highlight>Node.js</Highlight>, <Highlight>Next.js</Highlight>, 
  and <Highlight>Express</Highlight>, I love turning complex challenges 
  into intuitive, high-impact solutions. My experience also includes working 
  with <Highlight>MongoDB</Highlight>, <Highlight>REST APIs</Highlight>, 
  <Highlight>Azure</Highlight>, and <Highlight>SharePoint</Highlight> 
  integrations, ensuring seamless performance across the stack. 
  From ideation and design to deployment and long-term maintenance, 
  I thrive on every stage of the development lifecycle — transforming 
  ideas into reality through clean, reliable, and purposeful code.
</Paragraph>

          <Box align="center" my={4}>
            <Button
              href="/works"
              as={Link}
              boxShadow="lg"
              rightIcon={<ChevronRightIcon />}
              colorScheme="teal"
              _hover={{ bg: "teal.600" }}
            >
              My works
            </Button>
          </Box>
        </section>
      </MotionBox>

      {/* Work Experience Section */}
      <MotionBox
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.7 }}
        mb={6}
      >
        <section>
          <Heading as="h4" variant="section-title" mb={2}>
            Work Experience
          </Heading>
          <Box
            p={4}
            borderRadius="md"
            bg={useColorModeValue("#f0f0f040", "#23232a80")}
            boxShadow="md"
            mb={2}
          >
            <Heading as="h5" size="md" mb={1}>
              <b>Associate Software Engineer</b>
            </Heading>
            <Box fontWeight="semibold" mb={1}>
              <b>Ginet Tech Software</b> &nbsp;|&nbsp;{" "}
              <span style={{ color: "" }}>2024 – Present</span>
            </Box>
          </Box>
        </section>
      </MotionBox>

      <section>
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          mb={6}
        >
          <Heading as={"h3"} variant={"section-title"}>
            I ❤️
          </Heading>
          <Paragraph>
            Music, art, and some creative side projects – they keep my
            creativity flowing!
          </Paragraph>
        </MotionBox>
      </section>

      <Section delay={0.5}>
        <Box as="footer" textAlign="center">
          <Heading as={"h4"} variant={"section-title"}>
            Connect with me
          </Heading>
          <Box display="flex" justifyContent="center" gap={4} fontSize={25}>
            <Link href="mailto:abhinavmohan667@gmail.com">
              <MdEmail color="teal" />
            </Link>
            <Link target="_blank" href="https://github.com/Abhinav-mad">
              <IoLogoGithub color="teal" />
            </Link>
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/abhinav-mad4/"
            >
              <IoLogoLinkedin color="teal" />
            </Link>
          </Box>
        </Box>
      </Section>
    </Container>
  );
}
