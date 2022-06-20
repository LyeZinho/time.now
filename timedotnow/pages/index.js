//Next
import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script';
import Router from "next/router";
import Link from 'next/link'


//React
import React, { useState, useEffect } from 'react';


//Chakra UI
import { Code } from '@chakra-ui/react'
import { Box, Container } from '@chakra-ui/react'
import { Switch } from '@chakra-ui/react'
import { Stack, HStack, VStack } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from '@chakra-ui/react'
import { Flex, Spacer } from '@chakra-ui/react'
import { Grid, GridItem } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Center, Square, Circle } from '@chakra-ui/react'

//Icons
import {
   PhoneIcon, 
   AddIcon, 
   WarningIcon,
   ChevronRightIcon
} from '@chakra-ui/icons'

//Components
import  SponsorModal from '../components/sponsorButton'
// import Redirect from '../components/redirect';

const myLoader = ({ src, width, quality }) => {
  return `https://example.com/${src}?w=${width}&q=${quality || 75}`
}




export default function Home() {
  return (
    <div>
      <Head>
        <title>time.now api</title>
        <meta name="description" content="🕖 Time dot now - api" />
        <link rel="icon" href="icon/favicon.ico" />
      </Head>


      {/*Nav bar content*/}
      <Box bg='black' w='100%' h='100px' color='white'>
        <Flex color='white'>
          <Box p='4'>
            <ButtonGroup 
            spacing='0px'
            marginTop={1}
            >
            <Link href="/">
              <img 
                src="image/logo.png" 
                width='60px' 
                height='60px' 
                alt="logo"
                />
            </Link>
            </ButtonGroup>         
          </Box>
          <Spacer />
          <Box p='7'>
            <SponsorModal />
          </Box>
        </Flex>
      </Box>


      {/* Main content header */}
      <Container maxWidth="lg" paddingTop={10}>
        <Box>
          <Stack spacing={6}>
            <Heading as='h1' size='4xl' noOfLines={1}>
              Time.now
            </Heading>
          </Stack>
          <br /><br />
          <Text fontSize='3xl'>
            Minimal API for getting the current time.
          </Text>
        </Box>
      </Container>


      {/* Main content */}
      <Container maxWidth="lg" paddingTop={10}>
        <Box>
          <Stack spacing={6}>
            <Heading as='h2' size='2xl' noOfLines={1}>
              API
            </Heading>
            <Text fontSize='2xl'>
              <Code>
                https://time.now/api/v1/time
              </Code>
            </Text>
          </Stack>
          <br /><br />
          <Text fontSize='2xl'>
            <Code>
              https://time.now/api/v1/time
            </Code>
          </Text>
        </Box>
      </Container>



      {/* Footer */}
      <footer>
        <Box
          as="footer"
          bg="black"
          color="white"
          fontSize="sm"
          p={4}
          textAlign="center"
        >
          <Text fontSize='lg'>
            © {new Date().getFullYear()}, Built by <a href="https://github.com/LyeZinho">LyeZinho 📚</a>
          </Text>
        </Box>
      </footer>
    </div>
  )
}
