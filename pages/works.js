import { GridItemstyle, WorksGridItem } from "@/components/grid-items";
import Section from "@/components/section";
import { Container, Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { Global } from "@emotion/react";

import { motion } from "framer-motion";

const MotionBox = motion(Box);
const Works = () => {
  return (
    <Container>
      <Box>
        <Heading as={"h3"} variant="section-title">
          Works
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6} spacingY={20}>  
          <GridItemstyle />

          <Section delay={0.3}>
            <WorksGridItem
              title="YoutubeX"
              thumbnail="https://res.cloudinary.com/dsnzzjfr1/image/upload/v1751482944/YoutubeX_bw9pbd.png"
              github="https://github.com/Abhinav-mad/YoutubeX-clone"
              site="https://youtubeversionx.netlify.app/"
            >
              YoutubeX is a fully functional YouTube clone, allowing users to browse and watch videos, search for content, and interact through comments in a familiar interface.
            </WorksGridItem>
          </Section>
          
          <Section delay={0.3}>
            <WorksGridItem
              title="PantaChat"
              thumbnail="https://res.cloudinary.com/dsnzzjfr1/image/upload/v1751877023/pantachat2_vie0up.png"
              github="https://github.com/Abhinav-mad/PantaChat-SocialmediaApp"
              site="https://pantachat.onrender.com"
            > 
              PantaChat is a social media platform where you can create posts, chat with others, and follow users to stay connected.
            </WorksGridItem>
          </Section>

          <Section delay={0.3}>
            <WorksGridItem
              title="Media Player"
              thumbnail="https://res.cloudinary.com/dsnzzjfr1/image/upload/v1751871973/mediaplayerr_zih6gh.png"
              github="https://github.com/Abhinav-mad/Media-Player"
              site="#"
            >
              Media Player lets you share YouTube videos with custom titles and organize them into categories for easy access.
            </WorksGridItem>
          </Section>

          <Section delay={0.3}>
            <WorksGridItem
              title="Stream Chat"
              thumbnail="/PantachatChatpage.png"
              github="https://github.com/Abhinav-mad/hello"
              site="#"
            >
               real-time chat app with room functionality and YouTube video streaming.
            </WorksGridItem>
          </Section>
        </SimpleGrid>
      </Box>
    </Container>
  );
};

export default Works;