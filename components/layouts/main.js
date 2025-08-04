import React from "react";
import { Box, Container } from "@chakra-ui/react";
import Head from "next/head";
import Navbar from "../Navbar";
import ThreeDModel from "@/lib/model";
import dynamic from "next/dynamic";
import Loader from "../modelContainer";


const Lazy3DModel = dynamic(() => import('../../lib/model'), {
  ssr: false,
  loading: () => <Loader />
});

function main({ children, router }) {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Abhinav's portfolio" />
        <title>Abhinav'sDevCanvas</title>
      </Head>
        <Navbar path={router.asPath}/>
      <Container maxW="container.md" pt={14}  >
          
        <Lazy3DModel/>
          {children}
      </Container>
    </Box>
  );
}

export default main;
